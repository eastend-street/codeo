import React, { useEffect, useContext } from "react";
import AppContext from "../../contexts/AppContext";
import { getVideos } from "../../actions";

import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import Video from "../Video/Video";
import videos from "../../reducers/videos";

const Content = styled.div``;

const VideoList: React.FC = () => {
  const { state, dispatch } = useContext(AppContext);
  useEffect(() => {
    // getVideos(dispatch);
  });

  const renderVideos = (videos: any) => {
    videos.map((video: any) => {
      return <div>{video.id}</div>;
    });
  };

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
