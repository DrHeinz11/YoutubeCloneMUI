import { Stack, Box, Typography } from "@mui/material";
import ReactPlayer from "react-player";
import useDate from "../../hooks/useDate";
import axios from "axios";
import VideoPlayer from "../VideoPlayer";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const videoUrl = "https://www.youtube.com/watch?v=";

const VideoDetail = () => {
  const [dataRequest, setDataRequest] = useState(() => "");
  const [dateVideo, setDateVideo] = useState(() => "");
  let { id } = useParams();
  const options = {
    method: "GET",
    url: "https://youtube-v31.p.rapidapi.com/videos",
    params: { part: "contentDetails,snippet,statistics", id: `${id}` },
    headers: {
      "X-RapidAPI-Key": "b1d39b94ffmshff8c2a1a8d9ec98p1fd33ajsn9ef7453a6937",
      "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
    },
  };
  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        const [dataMock] = response.data.items;
        setDataRequest(dataMock);
        setDateVideo(useDate(dataMock));
      })
      .catch(function (error) {
        console.error(error);
        setDataRequest("error 404");
      });
  }, [id]);

  return (
    dataRequest && (
      <Box
        sx={{
          minHeight: "86vh",
          backgroundColor: "#333",
          padding: "10px 25px",
        }}
      >
        <Stack spacing={2}>
          {" "}
          <ReactPlayer
            url={`${videoUrl}${dataRequest.id}`}
            controls={true}
            playing={false}
          />{" "}
          <Typography color="white">{dataRequest.snippet.title}</Typography>
          <Typography color="white">{dateVideo}</Typography>
        </Stack>
      </Box>
    )
  );
};

export default VideoDetail;
