import { Route, Switch } from "wouter";
import { HomeContainer, VideoContainer } from "../pages";

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
          {(params) => <VideoContainer params={params} />}
        </Route>
        <Route path="/" component={HomeContainer} />
      </Switch>
    </>
  );
};

export default Routes;
