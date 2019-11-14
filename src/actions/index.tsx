import axios from "axios";

export const GET_VIDEOS = "GET_VIDEOS";

export const getVideos = async (dispatch: any) => {
  const response = await axios({
    method: "get",
    url: "https://www.googleapis.com/youtube/v3/search",
    params: {
      q: "HTML",
      key: process.env.REACT_APP_YOUTUBE_API_KEY,
      part: "snippet",
      maxResults: 8
    }
  });
  console.log(response)
  dispatch({ type: GET_VIDEOS, response });
};
