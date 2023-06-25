import axios, { AxiosResponse } from "axios";
import { DataRootObject } from "../types/typeAPI";
import { useEffect, useState } from "react";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  url: BASE_URL,
  params: {
    maxResults: "50",
    part: "snippet,id",
  },
  headers: {
    "X-RapidAPI-Key": "b1d39b94ffmshff8c2a1a8d9ec98p1fd33ajsn9ef7453a6937",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

const useFetchFromAPI = (url: string): { data: DataRootObject | null } => {
  const [data, setData] = useState<DataRootObject | null>(null);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const response: AxiosResponse = await axios.get(
          `${BASE_URL}/search?q=${url}`,
          options
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data from API:", error);
      }
    };

    fetchData();
  }, [url]);

  return { data };
};

export default useFetchFromAPI;
