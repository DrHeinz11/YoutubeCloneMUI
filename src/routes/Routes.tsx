import { Route, Switch } from 'wouter'
import { HomeContainer, VideoContainer } from '../pages'
import ChannelContainer from '../pages/Channel/ChannelContainer'
const Routes = () => {
  return (
    <>
      <Switch>
        <Route path="/video/:id">{(params) => <VideoContainer params={params} />}</Route>
        <Route path="/" component={HomeContainer} />
        <Route path="/channels/:id">
          {(params: { id: string }) => <ChannelContainer params={params} />}
        </Route>
      </Switch>
    </>
  )
}

export default Routes
