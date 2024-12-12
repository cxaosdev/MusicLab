"use client";
import Library from "./Library";
import NowPlaying from "./NowPlaying";

export default function Sidebar() {
  return (
    <aside className="w-[16rem] h-[calc(100vh-6rem)] background dark- p-4 hidden md:block">
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
