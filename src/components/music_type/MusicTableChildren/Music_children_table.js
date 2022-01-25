import { useState, useEffect } from "react";
import {
  FaMoon,
  FaCoffee,
  FaRocket,
  FaCloudSun,
  FaFire,
  FaCloudMoonRain,
  FaVolumeMute,
  FaVolumeUp,
  FaCloudRain,
  FaCheckCircle,
} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { buttonSlice } from "../../redux/buttonReducer";
import ReactAudioPlayer from "react-audio-player";
import audio from "../../../assets/audio/audio_file";

const $ = document.querySelector.bind(document);
function Music_children_table() {
  const [index, setIndex] = useState(0);
  const [isRainMuted, setIsRainMuted] = useState(true);
  const [typeClick, setTypeClick] = useState();
  const [moodClick, setMoodClick] = useState();

  const dispatch = useDispatch();
  const listSongs = useSelector(
    (state) => state.header_button.header_button.allSongs
  );

  useEffect(() => {
    $("#audio2").play();
  }, [index]);
  const handleSunRain = () => {
    dispatch(buttonSlice.actions.switchMode("light_rain"));
    setIndex(0);
    setIsRainMuted(false);
    setTypeClick("sunClick");
    $("#audio2").play();
  };

  const handleNightRain = () => {
    setIndex(0);
    dispatch(buttonSlice.actions.switchMode("night_rain"));
    setIsRainMuted(false);
    setTypeClick("nightClick");
    $("#audio2").play();
  };

  const handelFireSound = () => {
    setIsRainMuted(false);
    setIndex(1);
    setTypeClick("fireClick");
  };

  const handleRainVolume = () => {
    setIsRainMuted(!isRainMuted);
  };

  const handleMoon = () => {
    setMoodClick("moonClick");
    const newListSong = [];

    for (let i = 0; i < listSongs.length; i++) {
      if (i < 30) {
        newListSong.push(listSongs[i]);
      }
    }
    dispatch(buttonSlice.actions.getTypeSongs(newListSong));
  };
  const handleJazzy = () => {
    setMoodClick("jazzyClick");

    const newListSong = [];

    for (let i = 33; i < listSongs.length; i++) {
      if (i < 60) {
        newListSong.push(listSongs[i]);
      }
    }
    dispatch(buttonSlice.actions.getTypeSongs(newListSong));
  };
  const handleSleepy = () => {
    setMoodClick("sleepyClick");

    const newListSong = [];

    for (let i = 61; i < listSongs.length; i++) {
      if (i < 99) {
        newListSong.push(listSongs[i]);
      }
    }
    dispatch(buttonSlice.actions.getTypeSongs(newListSong));
  };

  return (
    <div className="flex flex-col justify-center">
      <h1 className="text-lg text-left text-purple-600 mb-[20px] font-bold">
        Mood
      </h1>
      <div className="flex  items-center ">
        <div className="btn_type text-white relative" onClick={handleMoon}>
          <FaMoon className="text-[40px] mb-[10px] text-black" />
          <h3>Moon</h3>

          {moodClick === "moonClick" ? (
            <FaCheckCircle className="absolute top-1 right-1 text-lg font-bold text-green-600" />
          ) : (
            ""
          )}
        </div>
        <div className="btn_type relative text-white" onClick={handleJazzy}>
          <FaRocket className="text-[40px] mb-[10px] text-white" />
          <h3>Jazzy</h3>

          {moodClick === "jazzyClick" ? (
            <FaCheckCircle className="absolute top-1 right-1 text-lg font-bold text-green-600" />
          ) : (
            ""
          )}
        </div>

        <div className="btn_type relative " onClick={handleSleepy}>
          <FaCoffee className="text-[40px] mb-[10px] text-red-400" />
          <h3 className="text-white ">Sleepy</h3>

          {moodClick === "sleepyClick" ? (
            <FaCheckCircle className="absolute top-1 right-1 text-lg font-bold text-green-600" />
          ) : (
            ""
          )}
        </div>
      </div>

      <h1 className="text-lg text-left text-red-300 mb-[20px] font-bold mt-[15px]">
        Background noises
      </h1>
      <div className="flex  items-center ">
        <div className="btn_type text-white relative" onClick={handleSunRain}>
          <FaCloudSun className="text-[40px] mb-[10px] text-yellow-500" />
          <h3>Sun Rain</h3>
          {typeClick === "sunClick" ? (
            <FaCheckCircle className="absolute top-1 right-1 text-lg font-bold text-green-600" />
          ) : (
            ""
          )}
        </div>
        <div className="btn_type text-white relative" onClick={handleNightRain}>
          <FaCloudMoonRain className="text-[40px] mb-[10px] text-gray-800 " />
          <h3>Night Rain</h3>
          {typeClick === "nightClick" ? (
            <FaCheckCircle className="absolute top-1 right-1 text-lg font-bold text-green-600" />
          ) : (
            ""
          )}
        </div>

        <div className="btn_type relative" onClick={handelFireSound}>
          <FaFire className="text-[40px] mb-[10px] text-red-400" />
          <h3 className="text-white ">Fireplace</h3>
          {typeClick === "fireClick" ? (
            <FaCheckCircle className="absolute top-1 right-1 text-lg font-bold text-green-600" />
          ) : (
            ""
          )}
        </div>
      </div>

      <h1 className="text-lg text-left text-white mb-[20px] font-bold mt-[15px]">
        Setting volume
      </h1>
      <div className="flex justify-center ">
        <div
          className="btn_type relative text-white"
          onClick={handleRainVolume}
        >
          <FaCloudRain className="text-[30px] mb-[10px] text-blue-400 " />
          <h3>Sound Rain</h3>

          {isRainMuted ? (
            <FaVolumeMute
              className="absolute top-2 right-2 text-lg"
              onClick={handleSunRain}
            />
          ) : (
            <FaVolumeUp className="absolute top-2 right-2 text-lg" />
          )}
        </div>
        {/* <div className="btn_type text-white" onClick={handleNightRain}>
          <FaMusic className="text-[40px] mb-[10px] text-green-500 " />
          <h3>Sound music</h3>
        </div> */}
      </div>

      <ReactAudioPlayer
        id="audio2"
        src={audio.chill[index].music}
        loop={true}
        muted={isRainMuted}
      />
    </div>
  );
}

export default Music_children_table;
