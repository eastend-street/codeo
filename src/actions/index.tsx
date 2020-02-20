import axios from "axios";
import getVideosFromJSON from "../utils/getVideosFromJSON";

export const GET_VIDEOS = "GET_VIDEOS";
export const UPDATE_VIDEO_DETAIL = "UPDATE_VIDEO_DETAIL";
export const GET_VIEW_COUNT = "GET_VIEW_COUNT";

export const getVideos = async (param: string, dispatch: any) => {
  let videoList: object[] = [];
  await axios({
    method: "get",
    url: "https://www.googleapis.com/youtube/v3/search",
    params: {
      q: param,
      key: process.env.REACT_APP_YOUTUBE_API_KEY,
      part: "snippet",
      maxResults: 24,
      type: "video"
    }
  })
    .then(async res => {
      videoList = await addViewCountToVideos(res.data.items);
    })
    .catch(error => {
      console.log(error);
      videoList = getVideosFromJSON(param);
    });
  dispatch({ type: GET_VIDEOS, payload: videoList });
};

export const updateVideoDetail = (videoDetail: object, dispatch: any) => {
  dispatch({ type: UPDATE_VIDEO_DETAIL, payload: videoDetail });
};

const addViewCountToVideos = async (videoList: object[]) => {
  const videoIdList = videoList.map((video: any) => video.id.videoId);
  await axios({
    method: "get",
    url: "https://www.googleapis.com/youtube/v3/videos",
    params: {
      id: videoIdList.join(","),
      key: process.env.REACT_APP_YOUTUBE_API_KEY,
      part: "statistics"
    }
  })
    .then(videos => {
      return videoList.map((video: any, index: number) =>
        videos
          ? { ...video, statistics: videos.data.items[index].statistics }
          : video
      );
    })
    .catch(error => {
      console.log(error);
    });
  return videoList;
};
