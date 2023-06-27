import { Stack } from "@chakra-ui/react";
import ReactPlayer from "react-player/youtube";

type Props = { id: string };

const VideoPlayer = ({ id }: Props) => {
  const urlPlayer = `https://www.youtube.com/watch?v=${id}`;
  return (
    <Stack boxSize={"full"} placeContent={"center"} alignItems={"center"}>
      <ReactPlayer url={urlPlayer} controls={true} playing={true} />
    </Stack>
  );
};

export default VideoPlayer;
