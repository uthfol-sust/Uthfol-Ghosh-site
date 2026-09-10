// lib/cpStats.ts

export type PlatformStats = {
  platform: "codeforces" | "leetcode" | "codechef";
  handle: string;
  profileUrl: string;
  rating: number | null;
  maxRating: number | null;
  rank: string | null;
  problemsSolved: number;
  contestsParticipated: number;
  error?: string;
};

type CodeforcesApiResponse<T> = {
  status: "OK" | "FAILED";
  result: T;
};

type CodeforcesUser = {
  rating?: number;
  maxRating?: number;
  rank?: string;
};

type CodeforcesSubmission = {
  verdict?: string;
  problem: {
    contestId?: number;
    index?: string;
    name?: string;
  };
  author?: {
    participantType?: string;
  };
};

type LeetCodeSubmissionCount = {
  difficulty: string;
  count: number;
};

type LeetCodeStatsResponse = {
  data?: {
    matchedUser?: {
      submitStatsGlobal?: {
        acSubmissionNum: LeetCodeSubmissionCount[];
      };
      profile?: {
        ranking?: number;
      };
    };
    userContestRanking?: {
      rating?: number;
      attendedContestsCount?: number;
    } | null;
  };
};

const CF_HANDLE = process.env.CF_HANDLE ?? "";
const LC_HANDLE = process.env.LC_HANDLE ?? "";
const CC_HANDLE = process.env.CC_HANDLE ?? "";

export async function getCodeforcesStats(): Promise<PlatformStats> {
  const profileUrl = `https://codeforces.com/profile/${CF_HANDLE}`;
  try {
    const [userRes, subRes] = await Promise.all([
      fetch(`https://codeforces.com/api/user.info?handles=${CF_HANDLE}`, {
        next: { revalidate: 3600 },
      }),
      fetch(`https://codeforces.com/api/user.status?handle=${CF_HANDLE}`, {
        next: { revalidate: 3600 },
      }),
    ]);

    if (!userRes.ok || !subRes.ok) throw new Error("Codeforces API request failed");

    const userData = (await userRes.json()) as CodeforcesApiResponse<CodeforcesUser[]>;
    const subData = (await subRes.json()) as CodeforcesApiResponse<CodeforcesSubmission[]>;

    if (userData.status !== "OK" || subData.status !== "OK") {
      throw new Error("Codeforces API returned non-OK status");
    }

    const submissions = subData.result;
    const solvedSet = new Set(
      submissions
        .filter((s) => s.verdict === "OK")
        .map((s) => `${s.problem.contestId ?? "practice"}-${s.problem.index ?? s.problem.name}`)
    );
    const contestSet = new Set(
      submissions
        .filter((s) => s.author?.participantType !== "PRACTICE" && s.problem.contestId)
        .map((s) => s.problem.contestId)
    );

    const user = userData.result[0];

    return {
      platform: "codeforces",
      handle: CF_HANDLE,
      profileUrl,
      rating: user.rating ?? null,
      maxRating: user.maxRating ?? null,
      rank: user.rank ?? null,
      problemsSolved: solvedSet.size,
      contestsParticipated: contestSet.size,
    };
  } catch (err) {
    return fallbackStats("codeforces", CF_HANDLE, profileUrl, err);
  }
}

export async function getLeetCodeStats(): Promise<PlatformStats> {
  const profileUrl = `https://leetcode.com/${LC_HANDLE}`;
  try {
    const query = `
      query userProfile($username: String!) {
        matchedUser(username: $username) {
          submitStatsGlobal {
            acSubmissionNum { difficulty count }
          }
          profile { ranking }
        }
        userContestRanking(username: $username) {
          rating
          attendedContestsCount
        }
      }`;

    const res = await fetch("https://leetcode.com/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query, variables: { username: LC_HANDLE } }),
      next: { revalidate: 3600 },
    });

    if (!res.ok) throw new Error("LeetCode GraphQL request failed");

    const json = (await res.json()) as LeetCodeStatsResponse;
    const matched = json.data?.matchedUser;
    if (!matched) throw new Error("LeetCode user not found");

    const totalSolved =
      matched.submitStatsGlobal?.acSubmissionNum.find((d) => d.difficulty === "All")
        ?.count ?? 0;

    const contestData = json.data?.userContestRanking;

    return {
      platform: "leetcode",
      handle: LC_HANDLE,
      profileUrl,
      rating: contestData?.rating ? Math.round(contestData.rating) : null,
      maxRating: null,
      rank: matched.profile?.ranking ? `#${matched.profile.ranking}` : null,
      problemsSolved: totalSolved,
      contestsParticipated: contestData?.attendedContestsCount ?? 0,
    };
  } catch (err) {
    return fallbackStats("leetcode", LC_HANDLE, profileUrl, err);
  }
}

export async function getCodeChefStats(): Promise<PlatformStats> {
  const profileUrl = `https://www.codechef.com/users/${CC_HANDLE}`;
  try {
    if (!CC_HANDLE) throw new Error("CodeChef handle is not configured");

    // CodeChef has no official public API for profile stats. Parse the public
    // profile page instead of depending on an unofficial wrapper deployment.
    const res = await fetch(profileUrl, {
      headers: {
        "User-Agent": "Mozilla/5.0",
      },
      next: { revalidate: 3600 },
    });

    if (!res.ok) throw new Error("CodeChef API request failed");

    const html = await res.text();
    const rating = parseFirstNumber(html, /<div class="rating-number">\s*([\d,]+)/);
    const maxRating = parseFirstNumber(html, /Highest Rating\s*([\d,]+)/);
    const problemsSolved = parseFirstNumber(html, /Total Problems Solved:\s*([\d,]+)/) ?? 0;
    const contestsParticipated =
      parseFirstNumber(html, /No\. of Contests Participated:\s*<b>\s*([\d,]+)/) ?? 0;
    const stars = (html.match(/class="rating-star"[\s\S]*?<\/div>/)?.[0].match(/&#9733;/g) ?? [])
      .length;

    if (rating === null && !html.includes("rating-header")) {
      throw new Error("CodeChef profile stats not found");
    }

    return {
      platform: "codechef",
      handle: CC_HANDLE,
      profileUrl,
      rating,
      maxRating,
      rank: stars > 0 ? `${stars} star${stars === 1 ? "" : "s"}` : null,
      problemsSolved,
      contestsParticipated,
    };
  } catch (err) {
    return fallbackStats("codechef", CC_HANDLE, profileUrl, err);
  }
}

function parseFirstNumber(source: string, pattern: RegExp): number | null {
  const raw = source.match(pattern)?.[1];
  if (!raw) return null;

  const value = Number.parseInt(raw.replace(/,/g, ""), 10);
  return Number.isNaN(value) ? null : value;
}

function fallbackStats(
  platform: PlatformStats["platform"],
  handle: string,
  profileUrl: string,
  err: unknown
): PlatformStats {
  return {
    platform,
    handle,
    profileUrl,
    rating: null,
    maxRating: null,
    rank: null,
    problemsSolved: 0,
    contestsParticipated: 0,
    error: err instanceof Error ? err.message : "Unknown error",
  };
}

export async function getAllCpStats(): Promise<PlatformStats[]> {
  return Promise.all([
    getCodeforcesStats(),
    getLeetCodeStats(),
    getCodeChefStats(),
  ]);
}
