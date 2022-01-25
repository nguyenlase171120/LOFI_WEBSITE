import { useState, useEffect } from "react";
import { FaRegPlayCircle, FaRegPauseCircle } from "react-icons/fa";
import { FcPrevious, FcNext } from "react-icons/fc";
import ReactAudioPlayer from "react-audio-player";
import { useSelector } from "react-redux";
import { listSong } from "../selector/listSong_selector";

const $ = document.querySelector.bind(document);

function Footer_website(props) {
  const [isPlaying, setIsPlaying] = useState("playing");
  const [indexSong, setIndexSong] = useState(0);
  const [listSongs, setListSongs] = useState(props.listAnimeSongs);
  const newListSongs = useSelector(listSong);

  useEffect(() => {
    if (newListSongs.length > 0) {
      setListSongs(newListSongs);
    }
  }, [newListSongs]);

  useEffect(() => {
    $("#audio").play();
  }, [indexSong]);

  useEffect(() => {
    $("#audio").play();
    if (newListSongs.length > 0) {
      setIsPlaying("pause");
    }
  }, [listSongs]);

  const handlePause = () => {
    setIsPlaying("playing");
    $("#audio").pause();
  };

  const handlePlay = () => {
    setIsPlaying("pause");
    $("#audio").play();
  };

  const handleNext = () => {
    indexSong + 1 >= listSongs.length
      ? setIndexSong(0)
      : setIndexSong(indexSong + 1);
    setIsPlaying("pause");
  };

  const handlePrevious = () => {
    indexSong - 1 < 0 ? setIndexSong(0) : setIndexSong(indexSong - 1);
    setIsPlaying("pause");
  };

  return (
    <div className="fixed bottom-0 left-0 w-full z-20 h-[120px] flex items-center bg-transparent">
      <p className="text-gray-300 text-[14px] ml-7 text-left font-bold">
        Music by-lofi.co 2021@
      </p>
      <div className="w-full flex items-center justify-center">
        <FcPrevious
          className="text-[30px] cursor-pointer mr-[30px] "
          onClick={handlePrevious}
        />

        {isPlaying === "playing" ? (
          <FaRegPlayCircle className="btn_audio" onClick={handlePlay} />
        ) : (
          <FaRegPauseCircle className="btn_audio" onClick={handlePause} />
        )}

        <FcNext
          className="text-[30px] cursor-pointer ml-[30px]"
          onClick={handleNext}
        />

        <ReactAudioPlayer
          id="audio"
          src={listSongs[indexSong].preview_url}
          onEnded={handleNext}
          autoPlay={false}
        />
      </div>
    </div>
  );
}

export default Footer_website;
