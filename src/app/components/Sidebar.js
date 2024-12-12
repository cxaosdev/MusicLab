"use client";
import Library from "./Library";
import NowPlaying from "./NowPlaying";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-lightBackground dark:bg-darkBackground p-4 hidden md:block">
      <div className="flex flex-col">
        <Library />
        <NowPlaying />
      </div>
    </aside>
  );
}
