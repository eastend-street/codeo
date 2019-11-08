import React, { useEffect, useContext } from "react";
import AppContext from "../../contexts/AppContext";
import { getVideos } from "../../actions";

import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import Video from "../Video/Video";

const Content = styled.div``;

const VideoList: React.FC = () => {
  const { dispatch } = useContext(AppContext);
  useEffect(() => {
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
