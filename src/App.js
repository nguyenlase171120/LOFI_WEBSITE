import ReactPlayer from "react-player";
import Header from "./components/header/Header";
import ShareForm from "./components/shareform/ShareForm";
import { useSelector, useDispatch } from "react-redux";
import Login_form from "./components/login/Login_form";
import { share_selector } from "./components/selector/share_selector";
import { login_selector } from "./components/selector/login_selector";
import { useState, useEffect } from "react";
import { modeSelector } from "./components/selector/mode_selector";
import Footer_website from "./components/footer/Footer_website";
import { audioSong } from "./api/audioSong";
import Music_container from "./components/music_type/music_container/Music_container";
import { buttonSlice } from "./components/redux/buttonReducer";

function App() {
  const dispatch = useDispatch();
  const isShare = useSelector(share_selector);
  const isLogin = useSelector(login_selector);
  console.log(isLogin);
  const [listSongs, setListSongs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(async () => {
    const listSongs = await audioSong.getListSongs();
    setListSongs(listSongs.data.documents);
    dispatch(buttonSlice.actions.getAllSongs(listSongs.data.documents));
    setIsLoading(true);
  }, []);

  const mode = useSelector(modeSelector);

  const renderMode = (modeType) => {
    switch (modeType) {
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

  renderMode();

  return (
    <div className="w-full h-full">
      <Header />
      {renderMode(mode)}
      {isShare && <ShareForm />}
      {isLogin && <Login_form />}
      {isLoading && <Footer_website listAnimeSongs={listSongs} />}
      <Music_container />
    </div>
  );
}

export default App;
