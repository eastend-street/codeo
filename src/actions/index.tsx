import axios from "axios";

export const GET_VIDEOS = "GET_VIDEOS";

export const getVideos = async (param: string, dispatch: any) => {
  try {
    const response = await axios({
      method: "get",
      url: "https://www.googleapis.com/youtube/v3/search",
      params: {
        q: param,
        key: process.env.REACT_APP_YOUTUBE_API_KEY,
        part: "snippet",
        maxResults: 8
      }
    });
    dispatch({ type: GET_VIDEOS, response });
  } catch (error) {
    console.error(error);
  }
};
