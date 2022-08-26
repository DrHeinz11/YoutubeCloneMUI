import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Navbar,
  VideoDetails,
  Feed,
  SearchFeed,
  ChannelDetail,
} from "./components";
const App = () => {
  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: "#000" }}>
        <Navbar />
        <Routes>
          <Route path="/" exact elements={<Feed />} />
          <Route path="/video/:id" elements={<VideoDetails />} />
          <Route path="/channel/:id" elements={<ChannelDetail />} />
          <Route path="/search/:searchTerm" elements={<SearchFeed />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
};

export default App;
