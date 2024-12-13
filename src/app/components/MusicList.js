import React, { useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa";
import { fetchData } from "@/api/axios";

export default function MusicList() {
  const [appleMusicJp, setAppleMusicJp] = useState([]);
  const [appleMusicKr, setAppleMusicKr] = useState([]);
  const [appleMusicUsa, setAppleMusicUsa] = useState([]);

  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        const data = await fetchData();

        setAppleMusicJp(data.slice(0, 100));
        setAppleMusicKr(data.slice(100, 200));
        setAppleMusicUsa(data.slice(200, 300));

        console.log("Chart 1:", data.slice(0, 100));
        console.log("Chart 2:", data.slice(100, 200));
        console.log("Chart 3:", data.slice(200, 300));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchDataAsync();
  }, []);
  return (
    <div className="w-[90%] h-[60%] mx-auto px-[2rem] py-[1rem]">
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
          {appleMusicKr.map((item, index) => (
            <tr
              key={index}
              className="transition-colors border-b border-lightButton/50 dark:border-darkButton/50 hover:bg-lightButton/50 dark:hover:bg-darkButton/50"
            >
              {/* 순위 */}
              <td className="px-4 py-3 text-center">{item.rank}</td>
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
              <td className="px-4 py-3 text-right">{item.streams}</td>
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
