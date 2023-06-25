import { Container, SimpleGrid } from "@chakra-ui/react";
import Card from "./Card/Card";
import useFetchFromAPI from "../api/useFetchFromAPI";

const Home = () => {
  const { data } = useFetchFromAPI("red velvet");
  console.log(data);
  return (
    <Container variant={"section"}>
      <SimpleGrid
        minChildWidth={"300px"}
        justifyItems={"center"}
        spacing={0}
        gap={4}
      >
        {data?.items.map((item) => {
          return (
            <Card
              key={item.id.videoId}
              srcImage={item.snippet.thumbnails.medium.url}
              srcChanell={""}
              srcImageAlt={item.snippet.title}
              srcChanellAlt={item.snippet.channelTitle}
              titleName={item.snippet.title}
              chanellName={item.snippet.channelTitle}
              viewsVideos={""}
              videoDuration={""}
              idVideo={item.id.videoId}
              dateVideos={""}
            />
          );
        })}
      </SimpleGrid>
    </Container>
  );
};

export default Home;
