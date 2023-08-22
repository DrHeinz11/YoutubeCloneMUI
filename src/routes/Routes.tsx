import { Route, Switch } from 'wouter'
import { HomeContainer, VideoContainer } from '../pages'
// import { Prueba } from '../pages/Pruebas'
import ChannelContainer from '../pages/Channel/ChannelContainer'

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
        <Route path="/video/:id">{(params) => <VideoContainer params={params} />}</Route>
        <Route path="/" component={HomeContainer} />
        {/* <Route path="/trends" component={Prueba} /> */}
        <Route path="/channels/:id">
          {(params: { id: string }) => <ChannelContainer params={params} />}
        </Route>
      </Switch>
    </>
  )
}

export default Routes
