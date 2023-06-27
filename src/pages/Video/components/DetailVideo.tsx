import {
  Button,
  Divider,
  HStack,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import {
  ContentDetails,
  SnippetVideoDetails,
  Statistics,
} from "../../../types/typeAPI";
import { AiOutlineLike, AiOutlineEye, AiOutlineDislike } from "react-icons/ai";
import { formatearNumero } from "../../../utils/ViewsFormater";
import ChannelDetails from "./ChannelDetails";
import { useState } from "react";

interface Props {
  snippet: SnippetVideoDetails;
  statistics: Statistics;
  contentDetails: ContentDetails;
  id: string;
}

const DetailVideo = ({ snippet, statistics, id, contentDetails }: Props) => {
  const [value, setValue] = useState<boolean>(false);
  return (
    <HStack flexWrap={"wrap"} alignItems={"flex-start"}>
      <Stack bgColor={"blackAlpha.100"} borderRadius={"lg"} px={2} pt={2} pb={4} flex={1}>
        <Heading>{snippet.title}</Heading>
        <Text
          cursor={"pointer"}
          _hover={{ color: "black" }}
          onClick={() => setValue(!value)}
          noOfLines={value ? 0 : 4}
        >
          {snippet.description}
        </Text>
      </Stack>
      <Stack>
        <HStack flex={1} gap={2} alignItems={"stretch"}>
          <HStack
            gap={1}
            spacing={0}
            bgColor={"blackAlpha.100"}
            borderRadius={"lg"}
            px={4}
            py={2}
          >
            <Button
              variant={"topNavBar"}
              flexDir={"row"}
              display={"flex"}
              gap={1}
              alignItems={"center"}
              _hover={{ bgColor: "green.200" }}
            >
              <AiOutlineLike size="18px" />
              {formatearNumero(statistics.likeCount)}
            </Button>
            <Divider orientation="vertical" />
            <Button
              _hover={{ color: "black", bgColor: "red.400" }}
              variant={"topNavBar"}
            >
              <AiOutlineDislike />
            </Button>
          </HStack>
          <HStack
            gap={1}
            alignItems={"center"}
            bgColor={"blackAlpha.100"}
            borderRadius={"lg"}
            px={4}
            py={2}
            flex={1}
          >
            <AiOutlineEye size="18px" />
            <Text>{formatearNumero(statistics.viewCount)}</Text>{" "}
          </HStack>
        </HStack>
        <ChannelDetails channelId={snippet.channelId} />{" "}
      </Stack>
    </HStack>
  );
};

export default DetailVideo;
