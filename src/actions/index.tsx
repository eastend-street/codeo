import axios from "axios";
import getVideosFromJSON from "../utils/getVideosFromJSON";
import videos from "../reducers/videos";
export const GET_VIDEOS = "GET_VIDEOS";
export const UPDATE_VIDEO_DETAIL = "UPDATE_VIDEO_DETAIL";
export const GET_VIEW_COUNT = "GET_VIEW_COUNT";

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
    // response = getVideosFromJSON(param);
    response = await addViewCountToVideos(response);
  } catch (error) {
    console.log(error);
    response = getVideosFromJSON(param);
  }
  dispatch({ type: GET_VIDEOS, response });
};

export const updateVideoDetail = (videoDetail: object, dispatch: any) => {
  dispatch({ type: UPDATE_VIDEO_DETAIL, payload: videoDetail });
};

const makeVideoIdList = (response: any) => {
  const videoIdList = response.data.items.map((video: any) => {
    return video.id.videoId;
  });
  return videoIdList;
};

const addViewCountToVideos = async (response: any) => {
  const videoIdList = makeVideoIdList(response);
  const videos = await getViewCount(videoIdList);
  const result = response.data.items.map((video: any, index: number) => {
    if (videos) {
      return {...video, statistics: videos.data.items[index].statistics};
    }
    return video;
  });
  return result;
};

export const getViewCount = async (videoIdList: []) => {
  let response;
  try {
    response = await axios({
      method: "get",
      url: "https://www.googleapis.com/youtube/v3/videos",
      params: {
        id: videoIdList.join(","),
        key: process.env.REACT_APP_YOUTUBE_API_KEY,
        part: "statistics"
      }
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};
