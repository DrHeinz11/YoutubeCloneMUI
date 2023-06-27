import { Button, HStack, Heading, Stack, Text } from "@chakra-ui/react";
import {
  ContentDetails,
  SnippetVideoDetails,
  Statistics,
} from "../../../types/typeAPI";
import { AiOutlineLike, AiOutlineEye } from "react-icons/ai";
import { formatearNumero } from "../../../utils/ViewsFormater";
import ChannelDetails from "./ChannelDetails";

interface Props {
  snippet: SnippetVideoDetails;
  statistics: Statistics;
  contentDetails: ContentDetails;
  id: string;
}

const DetailVideo = ({ snippet, statistics, id, contentDetails }: Props) => {
  return (
    <HStack flexWrap={"wrap"}>
      <Stack flex={1}>
        <Heading>{snippet.title}</Heading>
        <Text>{snippet.description}</Text>
      </Stack>
      <HStack flex={1}>
        <Button
          variant={"topNavBar"}
          flexDir={"row"}
          display={"flex"}
          gap={2}
          alignItems={"center"}
        >
          <AiOutlineLike size="18px" />
          {formatearNumero(statistics.likeCount)}
        </Button>
        <Text flexDir={"row"} display={"flex"} gap={2} alignItems={"center"}>
          <AiOutlineEye size="18px" />
          {formatearNumero(statistics.viewCount)}
        </Text>
      </HStack>
      <ChannelDetails channelId={snippet.channelId} />{" "}
    </HStack>
  );
};

export default DetailVideo;
