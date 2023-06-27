import {
  Center,
  Container,
  Heading,
  SimpleGrid,
  Spinner,
} from "@chakra-ui/react";
import Card from "./Card/Card";
import { useGetSearchVideosQuery } from "../store/reducers/apiFetch";
import { useSelector } from "react-redux";

const Home = () => {
  const state = useSelector((store) => store.searchReducer);
  const { data, isLoading, isError } = useGetSearchVideosQuery(state);
  if (isLoading)
    return (
      <Center boxSize={"full"}>
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="red.500"
          size="xl"
        />{" "}
      </Center>
    );
  if (isError) return <Heading>Is error : {isError}</Heading>;
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
          if (item.id.kind !== "youtube#channel")
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
