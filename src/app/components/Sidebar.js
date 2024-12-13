"use client";
import Library from "./Library";
import NowPlaying from "./NowPlaying";

export default function Sidebar() {
  return (
    <aside className="fixed top-[6rem] z-40 left-0 w-[20rem] h-[calc(100vh-6rem)] bg-lightBackground dark:bg-darkBackground shadow-md p-4 hidden md:block">
      <div className="flex flex-col h-full">
        <div className="flex-grow">
          <Library className="flex-grow" />
        </div>
        <div>
          <NowPlaying />
        </div>
      </div>
    </aside>
  );
}
