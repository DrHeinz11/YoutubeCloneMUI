import { Box, Typography } from "@mui/material";
import axios from "axios";
import VideoPlayer from "../VideoPlayer";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
const VideoDetail = () => {
  const videoUrl = "https://www.youtube.com/watch?v=";
  const [dataRequest, setDataRequest] = useState(() => "");
  let { id } = useParams();
  console.log(id);

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
      })
      .catch(function (error) {
        console.error(error);
        setDataRequest("error 404");
      });
  }, [id]);

  return (
    dataRequest && (
      <Box>
        <Typography color="white">{dataRequest.id}</Typography>
        <VideoPlayer videoUrl={`${videoUrl}${dataRequest.id}`} />
      </Box>
    )
  );
};

export default VideoDetail;
