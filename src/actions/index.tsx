import axios from "axios";

export const GET_VIDEOS = "GET_VIDEOS";

export const getVideos = async (dispatch: any) => {
  const response = await axios({
    method: "get",
    url: "https://www.googleapis.com/youtube/v3/search",
    params: {
      q: "javascript",
      key: process.env.REACT_APP_YOUTUBE_API_KEY,
      part: "snippet"
    }
  });
  dispatch({ type: GET_VIDEOS, response });
};
