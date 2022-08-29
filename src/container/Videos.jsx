import { Box, Stack } from "@mui/material";
import { VideoCard, ChannelCard } from "../components/VideosComponent";
const Videos = ({ videos }) => {
  return (
    <Stack
      sx={{ color: "#fff" }}
      direction="row"
      justifyContent={{ sm: "center", md: "start" }}
      gap={2}
      flexWrap="wrap"
    >
      {videos.map((item, index) => (
        <Box key={index} sx={{ margin: "0 auto" }}>
          {item.id.videoId && <VideoCard video={item} />}
          {/*   {item.id.chennelId && <ChannelCard channelDetail={item} />}*/}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
