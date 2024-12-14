"use client";
import React, { useEffect, useState } from "react";
import { IoIosPause, IoIosPlay } from "react-icons/io";

export default function NowPlaying({ currentSong }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoUrl, setVideoUrl] = useState(null);

  useEffect(() => {
    if (currentSong) {
      setIsPlaying(false);
      setVideoUrl(null);
      fetchYouTubeUrl();
    }
  }, [currentSong]);

  useEffect(() => {
    if (videoUrl) {
      const iframe = document.querySelector("#youtube-player");
      if (iframe) {
        iframe.onload = () => {
          setTimeout(() => {
            const player = iframe.contentWindow;
            player.postMessage(
              '{"event":"command","func":"playVideo","args":""}',
              "*"
            );
            setIsPlaying(true);
          }, 1000);
        };
      }
    }
  }, [videoUrl]);

  const fetchYouTubeUrl = async () => {
    try {
      const response = await fetch(
        `http://localhost:8000/api/play-song/youtube/${currentSong.id}`
      );
      if (!response.ok) {
        console.error("API Error:", await response.text());
        throw new Error("Failed to fetch video URL");
      }
      const data = await response.json();
      console.log("Received video data:", data);
      setVideoUrl(data.video_url);
    } catch (error) {
      console.error("Error fetching video URL:", error);
    }
  };

  const togglePlay = () => {
    if (videoUrl) {
      const iframe = document.querySelector("#youtube-player");
      if (iframe) {
        const player = iframe.contentWindow;
        if (isPlaying) {
          player.postMessage(
            '{"event":"command","func":"pauseVideo","args":""}',
            "*"
          );
        } else {
          player.postMessage(
            '{"event":"command","func":"playVideo","args":""}',
            "*"
          );
        }
        setIsPlaying(!isPlaying);
      }
    }
  };

  if (!currentSong) return null;

  return (
    <div className="h-[18rem] w-[12rem] mb-[1rem]">
      <h2 className="text-[1.2rem] font-semibold mb-[1rem]">Now Playing...</h2>
      <div className="mb-[1rem] flex items-center justify-between">
        <div>
          <h3 className="text-[.75rem] font-semibold">{currentSong.title}</h3>
          <p className="text-[.75rem] font-light">{currentSong.artist}</p>
        </div>
        <div onClick={togglePlay} className="cursor-pointer">
          {isPlaying ? (
            <IoIosPause className="text-[1.2rem]" />
          ) : (
            <IoIosPlay className="text-[1.2rem]" />
          )}
        </div>
      </div>
      <div>
        <img
          src={
            currentSong.thumbnail_link || "https://via.placeholder.com/300x300"
          }
          alt="What's Playing"
          className="w-[12rem] h-[12rem] background rounded-sm"
        />
      </div>
      {videoUrl && (
        <div style={{ display: "none" }}>
          <iframe
            id="youtube-player"
            width="0"
            height="0"
            src={`${videoUrl.replace("watch?v=", "embed/")}?enablejsapi=1`}
            frameBorder="0"
            allow="autoplay; encrypted-media"
          />
        </div>
      )}
    </div>
  );
}
