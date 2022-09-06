import { Box, Stack } from "@mui/material";
import { VideoCard } from "../components/VideosComponent";
const Videos = ({ videos }) => {
  return (
    <Stack
      sx={{ color: "#fff", padding: "0 5px" }}
      direction="row"
      justifyContent="center"
      gap={2}
      flexWrap="wrap"
    >
      {videos.map((item, index) => (
        <Box key={index}>
          {item.id.videoId && <VideoCard video={item} />}
          {/*   {item.id.chennelId && <ChannelCard channelDetail={item} />}*/}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
