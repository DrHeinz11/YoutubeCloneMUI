import { Route, Switch } from 'wouter'
import { Suspense, lazy } from 'react'
import { Loader } from '../components'

const VideoContainerLazy = lazy(() => import('../pages/Video/VideoContainer'))
const ChannelContainerLazy = lazy(() => import('../pages/Channel/ChannelContainer'))
const HomeContainerLazy = lazy(() => import('../pages/Home/HomeContainer'))
const Routes = () => {
  return (
    <>
      <Switch>
        <Suspense fallback={<Loader />}>
          <Route path="/video/:id">{(params) => <VideoContainerLazy params={params} />}</Route>
          <Route path="/" component={HomeContainerLazy} />
          <Route path="/channels/:id">
            {(params: { id: string }) => <ChannelContainerLazy params={params} />}
          </Route>
        </Suspense>
      </Switch>
    </>
  )
}

export default Routes
