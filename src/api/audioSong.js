import axiosClient from "./axiosClient";

export const audioSong = {
  getListSongs: () => {
    const url = "/v1/song";
    return axiosClient.get(url);
  },
};
