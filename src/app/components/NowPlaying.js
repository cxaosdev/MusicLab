"use client";
import React from "react";

export default function NowPlaying() {
  return (
    <div className="bg-gray-800 p-4 rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Now Playing...</h2>
      <div className="mt-4">
        <h3 className="text-lg font-bold">Title</h3>
        <p className="text-sm text-gray-400">Artist Artist</p>
      </div>
      <div className="flex space-x-4 mt-4">
        <button className="px-4 py-2 ">▶️</button>
        <button className="px-4 py-2  ">⏸</button>
      </div>
    </div>
  );
}
