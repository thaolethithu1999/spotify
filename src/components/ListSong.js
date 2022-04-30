import React, { useContext, useEffect, useState } from "react";
import { Songs } from "../Context";

const ListSong = () => {

  const { DataSong, handleSetSong, song } = useContext(Songs);
  console.log(DataSong);

  const [idSong, setIdSong] = useState(0);

  const handlePlaySong = (idSong) => {
      setIdSong(idSong)
      handleSetSong(idSong)
  };

  useEffect(() => {
   setIdSong(song.id )
  }, [song])
  
  return (
    <div className="col-span-2 overflow-y-scroll">
      <table className="table-auto w-full ">
        <thead className="text-white h-12">
          <tr>
            <th className="w-[10%]">#</th>
            <th className="text-left">Title</th>
            <th className="w-[10%]">Author</th>
            <th className="w-[10%]">
              <i className="fa fa-download"></i>
            </th>
          </tr>
        </thead>
        <tbody>
          {DataSong.map((song, idx) => (
            <tr
              key={idx}
              className={`bg-slate-800 h-12 text-gray-500 hover:bg-slate-600 hover:text-teal-600 ${
                idSong === song.id && "text-teal-300"
              }`}
              onClick={() => handlePlaySong(song.id)}
            >
              <td className="text-center">{idx + 1}</td>
              <td>{song.name}</td>
              <td className="text-center">{song.author}</td>
              <td className="text-center">
                <a href={song.url}>
                  <i className="fa fa-download"></i>
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListSong;
