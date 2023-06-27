import { Stack } from "@chakra-ui/react";
import { SerializedError } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query";
import { VideoPlayer } from "..";
import { Loader, IsError } from "../../components";
import { useGetDetailVideosQuery } from "../../store/reducers/apiFetch";
import { DataDetailsVideos } from "../../types/typeAPI";
import DetailVideo from "./components/DetailVideo";

type Props = { params: { id: string } };

const VideoContainer = ({ params: { id } }: Props) => {
  const { data, isLoading, isError, error } = useGetDetailVideosQuery<{
    data: DataDetailsVideos;
    error: FetchBaseQueryError | SerializedError;
    isLoading: boolean;
    isError: boolean;
  }>({ videoId: id });
  if (isLoading) return <Loader />;
  if (isError) return <IsError error={error} />;
  if (data) {
    console.log(data);
    return (
      <Stack bgColor={"#fafafa"} borderRadius={"xl"} mx={4} my={2} p={4}>
        <VideoPlayer id={id} />
        {data.items.map((v) => (
          <DetailVideo
            snippet={v.snippet}
            contentDetails={v.contentDetails}
            statistics={v.statistics}
            id={v.id}
          />
        ))}
      </Stack>
    );
  }
};

export default VideoContainer;
