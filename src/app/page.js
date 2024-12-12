"use client";

export default function Home() {
  const dummyData = Array(10).fill({
    title: "Title",
    artist: "Artist",
    streams: "100,000",
  });

  return (
    <div className="p-4">
      {/* <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="col-span-4">
          <table className="table-auto w-full border-collapse">
            <thead>
              <tr className="border-b border-lightText dark:border-gray">
                <th className="p-2 text-left">Title</th>
                <th className="p-2 text-left">Artist</th>
                <th className="p-2 text-left"> </th>
                <th className="p-2 text-left">Streams</th>
              </tr>
            </thead>
            <tbody>
              {dummyData.map((item, index) => (
                <tr
                  key={index}
                  className="border-b border-lightText dark:border-gray"
                >
                  <td className="p-2">{item.title}</td>
                  <td className="p-2">{item.artist}</td>
                  <td className="p-2">{item.album}</td>
                  <td className="p-2">{item.streams}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div> */}
    </div>
  );
}
