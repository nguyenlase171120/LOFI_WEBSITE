//Import libraries
import ReactPlayer from "react-player";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";

//Import components
import Header_container from "./components/header/Header_container";
import Login_form from "./components/login/Login_form";
import { share_selector } from "./components/selector/share_selector";
import { login_selector } from "./components/selector/login_selector";
import { modeSelector } from "./components/selector/mode_selector";
import Footer_website from "./components/footer/Footer_website";
import { audioSong } from "./api/audioSong";
import Music_container from "./components/music_type/music_container/Music_container";
import { buttonSlice } from "./components/redux/buttonReducer";
import Share_table from "./components/ShareTable/Share_table";

function App() {
  const dispatch = useDispatch();
  const isClickShare = useSelector(share_selector);
  const isClickLogin = useSelector(login_selector);
  const modeType = useSelector(modeSelector);

  const [listSongs, setListSongs] = useState([]);
  const [isLoadingSongs, setIsLoadingSongs] = useState(false);

  useEffect(async () => {
    const getListSongs = await audioSong.getListSongs();
    setListSongs(getListSongs.data.documents);
    dispatch(buttonSlice.actions.getAllSongs(listSongs));
    setIsLoadingSongs(true);
  }, []);

  //UseEffect for switch mode
  useEffect(() => {
    handleSwitchMode();
  }, [modeType]);

  const handleSwitchMode = (mode) => {
    switch (mode) {
      case "dark": {
        return (
          <ReactPlayer
            url="https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/scenes/chill-vibes/BDR%20STARRY%20NIGHT%20-.mp4"
            autoPlay={true}
            loop="true"
            width="100%"
            height="100%"
            playing="true"
            className="z-0"
          />
        );
      }
      case "light": {
        return (
          <ReactPlayer
            url="https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/scenes/chill-vibes/BDR%20Day%20112521%20%281%29.mp4"
            autoPlay={true}
            loop="true"
            width="100%"
            height="100%"
            playing="true"
            className="z-0"
          />
        );
      }
      case "light_rain": {
        return (
          <ReactPlayer
            url="https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/scenes/chill-vibes/BDR%20RAINY%20DAY.mp4"
            autoPlay={true}
            loop="true"
            width="100%"
            height="100%"
            playing="true"
            className="z-0"
          />
        );
      }
      case "night_rain": {
        return (
          <ReactPlayer
            url="https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/scenes/chill-vibes/BDR%20RAINY%20NIGHT.mp4"
            autoPlay={true}
            loop="true"
            width="100%"
            height="100%"
            playing="true"
            className="z-0"
          />
        );
      }

      default: {
        console.log("Switch error");
        break;
      }
    }
  };

  return (
    <div className="w-full h-full">
      <Header_container />
      {handleSwitchMode(modeType)}
      {isClickShare && <Share_table />}
      {isClickLogin && <Login_form />}
      {isLoadingSongs && <Footer_website listAnimeSongs={listSongs} />}
      <Music_container />
    </div>
  );
}

export default App;
