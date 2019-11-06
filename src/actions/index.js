import axios from "axios";

export const GET_VIDEOS = "GET_VIDEOS";

export const getVideos = dispatch => async dispatch => {
  console.log("saaaa");
  const response = await axios({
    method: "get",
    url: "https://www.googleapis.com/youtube/v3/react",
    dataType: "json",
    data: {
      key: process.env.YOUTUBE_API_KEY
    }
  });
  console.log(response);
  dispatch({ type: GET_VIDEOS, response });
};
