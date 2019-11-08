import React, { useEffect, useContext } from "react";
import AppContext from "../../contexts/AppContext";
// import axios from "axios";
import { GET_VIDEOS, testFunc, getVideos } from "../../actions";

import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import Video from "../Video/Video";

const Content = styled.div``;

const VideoList: React.FC = () => {
  const { dispatch } = useContext(AppContext);
  useEffect(() => {
    testFunc();
    // async function getVideos() {
    //   const response = await axios({
    //     method: "get",
    //     url: "https://www.googleapis.com/youtube/v3/search",
    //     params: {
    //       q: "react",
    //       key: process.env.REACT_APP_YOUTUBE_API_KEY,
    //       part: "snippet"
    //     }
    //   });
    //   dispatch({ type: GET_VIDEOS, response });
    // }

    getVideos(dispatch);
  });

  return (
    <Content>
      <Grid container>
        <Grid item xs={12} sm={6} md={3}>
          <Video />
        </Grid>
      </Grid>
    </Content>
  );
};

export default VideoList;
