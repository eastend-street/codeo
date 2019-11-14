import React, { useEffect, useContext } from "react";
import AppContext from "../../contexts/AppContext";
import { getVideos } from "../../actions";

import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import Video from "../Video/Video";

const Content = styled.div``;

const VideoList: React.FC = () => {
  const { state, dispatch } = useContext(AppContext);
  useEffect(() => {
    getVideos(dispatch);
  });

  // const renderVideos = () => {
  //   {
  //     state.videos.items.map((video: any, index: number) => {
  //       return (
  //         <Grid item xs={12} sm={6} md={3} key={index}>
  //           <Video url={video.snippet.thumbnails.high.url} />
  //           {/* <div>{video.snippet.title}</div> */}
  //         </Grid>
  //       );
  //     });
  //   }
  // };

  return (
    <Content>
      <Grid container>
        {state.videos.items.map((video: any, index: number) => {
          return (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <div>
                <Video url={video.snippet.thumbnails.high.url} />
                <div>{video.snippet.title}</div>
              </div>
            </Grid>
          );
        })}
      </Grid>
    </Content>
  );
};

export default VideoList;
