import { SerializedError } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query";
import { Loader, IsError } from "../../../components";
import { useGetDetailChannelQuery } from "../../../store/reducers/apiFetch";
import { DataDetailsVideos } from "../../../types/typeAPI";

type Props = { channelId: string };

const ChannelDetails = (props: Props) => {
  const { data, isLoading, isError, error } = useGetDetailChannelQuery<{
    data: DataDetailsVideos;
    error: FetchBaseQueryError | SerializedError;
    isLoading: boolean;
    isError: boolean;
  }>({ channelId: props.channelId });
  if (isLoading) return <Loader />;

  if (isError) return <IsError error={error} />;
  return <div>ChannelDetails</div>;
};

export default ChannelDetails;
