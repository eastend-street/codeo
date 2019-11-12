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
    getVideos(dispatch);
  }, []);

  const renderVideos: React.FC = () => {
    console.log(state);
    return <div>aaa</div>;
    // videos.map((video: any) => {
    //   return <div>{video.id}</div>;
    // });
  };

  return (
    <Content>
      <Grid container>
        <Grid item xs={12} sm={6} md={3}>
          <Video />
        </Grid>
      </Grid>
      <div>
        {console.log(state.videos.items)}
        {state.videos.items.map((video: any, index: number) => {
          console.log(video.snippet.title);
          return (
            <div key={index}>
              <div>{video.snippet.title}</div>
              <Video url={video.snippet.thumbnails.default.url}/>
            </div>
          );
        })}
      </div>
    </Content>
  );
};

export default VideoList;
