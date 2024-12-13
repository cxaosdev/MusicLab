import React from "react";
import { FaPlay } from "react-icons/fa";

export default function MusicList() {
  const dummyData = [
    {
      title: "Title134",
      artist: "Artis2135252551t",
      streams: "140,0340",
    },
    {
      title: "Tewit2135le",
      artist: "Artist",
      streams: "130,460",
    },
    {
      title: "Tiwrt2351le",
      artist: "Awrt325irst",
      streams: "100,036",
    },
    {
      title: "Tweit2315le",
      artist: "Ar235tist",
      streams: "90,036",
    },
    {
      title: "Ti12sf3552tle",
      artist: "Art235saist",
      streams: "90,023",
    },
    {
      title: "Tiastle",
      artist: "Ar3525tist",
      streams: "90,030",
    },
    {
      title: "Titasfsafaf35le",
      artist: "Art3525ist",
      streams: "90,007",
    },
    {
      title: "Title134",
      artist: "Artis2135252551t",
      streams: "140,0340",
    },
    {
      title: "Tewit2135le",
      artist: "Artist",
      streams: "130,460",
    },
    {
      title: "Tiwrt2351le",
      artist: "Awrt325irst",
      streams: "100,036",
    },
    {
      title: "Tweit2315le",
      artist: "Ar235tist",
      streams: "90,036",
    },
    {
      title: "Ti12sf3552tle",
      artist: "Art235saist",
      streams: "90,023",
    },
    {
      title: "Tiastle",
      artist: "Ar3525tist",
      streams: "90,030",
    },
    {
      title: "Titasfsafaf35le",
      artist: "Art3525ist",
      streams: "90,007",
    },
  ];

  return (
    <div className="w-[90%] h-[60%] mx-auto px-[2rem] py-[1rem]">
      <table className="table-auto w-full border-collapse text-left">
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
        {/* 테이블 바디 */}
        <tbody className="font-normal text-lightText/80 dark:text-darkText/80">
          {dummyData.map((item, index) => (
            <tr
              key={index}
              className="border-b border-lightButton/50 dark:border-darkButton/50 hover:bg-lightButton/50 dark:hover:bg-darkButton/50 transition-colors"
            >
              {/* 번호 */}
              <td className="px-4 py-3 text-center">{index + 1}</td>
              {/* 이미지 */}
              <td className="px-4 py-3 text-center">
                <img
                  src="https://via.placeholder.com/40"
                  alt="Cover"
                  className="w-10 h-10 rounded object-cover"
                />
              </td>
              {/* 제목 */}
              <td className="px-4 py-3 text-left font-medium">{item.title}</td>
              {/* 아티스트 */}
              <td className="px-4 py-3 text-right">{item.artist}</td>
              {/* 스트림 수 */}
              <td className="px-4 py-3 text-right">{item.streams}</td>
              {/* 재생 버튼 */}
              <td className="px-4 py-3 text-center">
                <button className=" hover:text-blue-500">
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
