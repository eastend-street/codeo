import { UPDATE_VIDEO_DETAIL } from "../actions";

const videoDetail = (state = {}, action) => {
  console.log(action)
  switch (action.type) {
    case UPDATE_VIDEO_DETAIL:
      return action.payload;
    default:
      return state;
  }
};

export default videoDetail;
