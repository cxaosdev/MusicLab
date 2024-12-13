import React, { useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa";
import { useMusic } from "../context/MusicContext";

import {
  fetchAppleMusicChart,
  fetchYoutubeChart,
  fetchSpotifyChart,
} from "@/api/fetchChart";

export default function MusicList() {
  const [appleMusicKr, setAppleMusicKr] = useState([]);
  const [youtubeKr, setYoutubeKr] = useState([]);
  const [spotifyKr, setSpotifyKr] = useState([]);

  const { selectedChart, selectedRegion } = useMusic();
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let data = [];
        if (selectedChart === "YouTube Music") {
          data = await fetchYoutubeChart();
        } else if (selectedChart === "Apple Music") {
          data = await fetchAppleMusicChart();
        } else if (selectedChart === "Spotify") {
          data = await fetchSpotifyChart();
        }

        // 지역 데이터를 추출하는 로직
        let regionData = [];
        if (selectedRegion === "JPN") {
          regionData = data[0];
        } else if (selectedRegion === "KOR") {
          regionData = data[1];
        } else if (selectedRegion === "USA") {
          regionData = data[2];
        }
        setChartData(regionData);
      } catch (error) {
        console.error("Error fetching chart data:", error);
      }
    };

    fetchData();
  }, [selectedChart, selectedRegion]);

  return (
    <div>
      <ChartTable
        title={`${selectedChart} ${selectedRegion} Chart`}
        data={chartData}
      />
    </div>
  );
}

function ChartTable({ title, data }) {
  return (
    <div className="my-8">
      <h2 className="mb-4 text-xl font-bold">{title}</h2>
      <table className="w-full text-left border-collapse table-auto">
        {/* 테이블 헤더 */}
        <thead>
          <tr className="border-b-[1px] border-lightText dark:border-darkText font-bold">
            <th className="w-[5%] px-4 py-3 text-center">#</th>
            <th className="w-[10%] px-4 py-3 text-center"></th>
            <th className="w-[40%] px-4 py-3 text-left">Title</th>
            <th className="w-[25%] px-4 py-3 text-right">Artist</th>
            <th className="w-[15%] px-4 py-3 text-right">Streams</th>
            <th className="w-[5%] px-4 py-3 text-center"></th>
          </tr>
        </thead>
        <tbody className="font-normal text-lightText/80 dark:text-darkText/80">
          {data.map((item, index) => (
            <tr
              key={index}
              className="transition-colors border-b border-lightButton/50 dark:border-darkButton/50 hover:bg-lightButton/50 dark:hover:bg-darkButton/50"
            >
              {/* 순위 */}
              <td className="px-4 py-3 text-center">
                {item.rank}
                {item.current_position}
              </td>
              {/* 앨범 이미지 */}
              <td className="px-4 py-3 text-center">
                <img
                  src={item.thumbnail_link}
                  alt="Cover"
                  className="object-cover w-10 h-10 rounded"
                />
              </td>
              {/* 노래 제목 */}
              <td className="px-4 py-3 font-medium text-left">{item.title}</td>
              {/* 아티스트 */}
              <td className="px-4 py-3 text-right">{item.artist}</td>
              {/* 스트림 수 */}
              <td className="px-4 py-3 text-right">
                {item.streams}
                {item.views}
              </td>
              {/* 재생 */}
              <td className="px-4 py-3 text-center">
                <button className=" hover:text-primary text-[.75rem]">
                  <FaPlay />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
