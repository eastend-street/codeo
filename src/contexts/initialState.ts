interface InitialState {
  videos: object[];
  videoDetail: {
    video: object;
    isVisible: boolean;
    videoId: string;
    rowNum: number;
  };
}

const initialState: InitialState = {
  videos: [],
  videoDetail: {
    video: {},
    isVisible: false,
    videoId: '',
    rowNum: 0
  }
};

export default initialState;
