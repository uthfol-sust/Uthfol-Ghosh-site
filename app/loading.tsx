import BirdAnimation from "@/components/BirdAnimation";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950">
      <BirdAnimation />
      <div className="relative z-10 flex flex-col items-center gap-4">
        <div className="h-10 w-10 animate-spin rounded-full border-2 border-cyan-400/30 border-t-cyan-400" />
        <p className="text-sm tracking-widest text-zinc-500 uppercase">Loading</p>
      </div>
    </div>
  );
}
