import { GET_VIDEOS } from "../actions";

const videos = (state = [], action) => {
  switch (action.type) {
    case GET_VIDEOS:
      return action.payload;
    default:
      return state;
  }
};

export default videos;
