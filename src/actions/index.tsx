import axios from "axios";
import getVideosFromJSON from "../utils/getVideosFromJSON";
export const GET_VIDEOS = "GET_VIDEOS";
export const UPDATE_VIDEO_DETAIL = "UPDATE_VIDEO_DETAIL";

export const getVideos = async (param: string, dispatch: any) => {
  let response;
  try {
    response = await axios({
      method: "get",
      url: "https://www.googleapis.com/youtube/v3/search",
      params: {
        q: param,
        key: process.env.REACT_APP_YOUTUBE_API_KEY,
        part: "snippet",
        maxResults: 24,
        type: "video"
      }
    });
  } catch (error) {
    console.log(error);
    response = getVideosFromJSON(param);
  }
  dispatch({ type: GET_VIDEOS, response });
};

export const updateVideoDetail = (videoDetail: object, dispatch: any) => {
  dispatch({ type: UPDATE_VIDEO_DETAIL, payload: videoDetail });
};
