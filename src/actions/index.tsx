import axios from "axios";

export const GET_VIDEOS = "GET_VIDEOS";
export const GET_VIDEO_DETAIL = "GET_VIDEO_DETAIL";

export const getVideos = async (param: string, dispatch: any) => {
  try {
    const response = await axios({
      method: "get",
      url: "https://www.googleapis.com/youtube/v3/search",
      params: {
        q: param,
        key: process.env.REACT_APP_YOUTUBE_API_KEY,
        part: "snippet",
        maxResults: 16,
        type: "video"
      }
    });
    dispatch({ type: GET_VIDEOS, response });
  } catch (error) {
    console.error(error);
  }
};

// export const getVideoDetail = async (param: string, dispatch: any) => {
//   try {
//     const response = await axios({
//       method: "get",
//       url: "https://www.googleapis.com/youtube/v3/search",
//       params: {
//         q: param,
//         key: process.env.REACT_APP_YOUTUBE_API_KEY,
//         part: "snippet",
//       }
//     });
//     dispatch({ type: GET_VIDEO_DETAIL, response });
//   } catch (error) {
//     console.error(error);
//   }
// };

