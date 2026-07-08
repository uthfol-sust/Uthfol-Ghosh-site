// components/BirdAnimation.tsx
"use client";

export default function BirdAnimation() {
  const birds = [
    { id: 1, top: "18%", duration: 20, delay: 0, size: 32 },
    { id: 2, top: "42%", duration: 25, delay: 5, size: 24 },
    { id: 3, top: "65%", duration: 28, delay: 11, size: 36 },
    { id: 4, top: "82%", duration: 22, delay: 3, size: 20 },
    { id: 5, top: "32%", duration: 30, delay: 8, size: 28 },
  ];

  return (
    <div className="bird-layer pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {birds.map((bird) => (
        <div
          key={bird.id}
          className="bird-body"
          style={{
            top: bird.top,
            animation: `bird-flight ${bird.duration}s linear ${bird.delay}s infinite`,
          }}
        >
          <svg
            viewBox="0 0 60 32"
            className="bird-svg text-cyan-300/40"
            style={{
              width: bird.size,
              height: "auto",
              animation: `bird-flap 0.45s ease-in-out ${bird.delay}s infinite`,
            }}
          >
            <g className="left-wing" style={{ transformOrigin: "30px 16px" }}>
              <path
                d="M 30 16 C 20 10 8 7 2 4 C 6 10 14 16 30 16 Z"
                fill="currentColor"
              />
            </g>
            <g className="right-wing" style={{ transformOrigin: "30px 16px" }}>
              <path
                d="M 30 16 C 40 10 52 7 58 4 C 54 10 46 16 30 16 Z"
                fill="currentColor"
              />
            </g>
            <ellipse cx="30" cy="18" rx="5" ry="2.5" fill="currentColor" />
          </svg>
        </div>
      ))}
    </div>
  );
}
