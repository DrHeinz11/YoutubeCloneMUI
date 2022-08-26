import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Navbar,
  VideoDetail,
  Feed,
  SearchFeed,
  ChannelDetail,
} from "./components";
import { Box } from "@mui/material";
const App = () => {
  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: "#ccc" }}>
        <Navbar />
        <Routes>
          <Route path="/" exact elements={<Feed />} />
          <Route path="/video/:id" elements={<VideoDetail />} />
          <Route path="/channel/:id" elements={<ChannelDetail />} />
          <Route path="/search/:searchTerm" elements={<SearchFeed />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
};

export default App;
