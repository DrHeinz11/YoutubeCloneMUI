import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import Card from "./Card/Card";
import { useGetSearchVideosQuery } from "../store/reducers/apiFetch";
import TopRated from "./TopRated";
import { useSelector } from "react-redux";

const Home = () => {
  const state = useSelector((store) => store.searchReducer);
  const { data, isLoading, isError } = useGetSearchVideosQuery(state);
  if (isLoading) return <Heading>Is loading</Heading>;
  if (isError) return <Heading>Is error : {isError}</Heading>;
  return (
    <Container variant={"section"}>
      <TopRated />
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
