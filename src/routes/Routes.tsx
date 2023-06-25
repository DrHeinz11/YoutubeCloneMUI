import { Route, Switch } from "wouter";
import Home from "../components/Home";
import VideoPlayer from "../components/VideoPlayer/VideoPlayer";

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
        <Route path="/" component={Home} />
      </Switch>
    </>
  );
};

export default Routes;
