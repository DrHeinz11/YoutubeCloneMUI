import { Stack } from "@chakra-ui/react";
import ReactPlayer from "react-player/youtube";

type Props = { id: string };

const VideoPlayer = ({ id }: Props) => {
  const urlPlayer = `https://www.youtube.com/watch?v=${id}`;
  return (
    <Stack boxSize={"full"} placeContent={"center"} alignItems={"flex-start"} borderRadius={'lg'}>
      <ReactPlayer url={urlPlayer} controls={true} playing={true} width={'625px'} />
    </Stack>
  );
};

export default VideoPlayer;
