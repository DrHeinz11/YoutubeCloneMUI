import { Route, Switch } from "wouter";
import Home from "../components/Home";
import VideoPlayer from "../components/VideoPlayer/VideoPlayer";
import TopRated from "../components/TopRated";

const Routes = () => {
  //   const [location, navigate] = useLocation();
  //   const dataMock = location.split("/");j
  return (
    <>
      <Switch>
        {/* <Route path="/project/:id">
          {(params) => <PruebaPage params={params} />}
        </Route>
        <Route path="/project">
          <PruebaPage params={{ id: "caca" }} />
        </Route>*/}
        <Route path="/video/:id">
          {(params) => <VideoPlayer params={params} />}
        </Route>
        <Route path="/top-rated">
          <TopRated />
        </Route>
        <Route path="/" component={Home} />
      </Switch>
    </>
  );
};

export default Routes;
