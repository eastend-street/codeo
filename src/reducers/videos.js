import { GET_VIDEOS } from "../actions";

const videos = (state = [], action) => {
  switch (action.type) {
    case GET_VIDEOS:
      return state;
    default:
      return state;
  }
};

export default videos;
