import { Route, Switch } from 'wouter'
import { Suspense, lazy } from 'react'
import { Loader } from '../components'

const VideoContainerLazy = lazy(() => import('../pages/Video/VideoContainer'))
const ChannelContainerLazy = lazy(() => import('../pages/Channel/ChannelContainer'))
const HomeContainerLazy = lazy(() => import('../pages/Home/HomeContainer'))
const HistoryContainerLazy = lazy(() => import('../pages/History/HistoryPage'))
const LikedContainerLazy = lazy(() => import('../pages/Preferences/FavouriteView'))
const UnLikedContainerLazy = lazy(() => import('../pages/Preferences/UnLikedView'))
const Routes = () => {
  return (
    <>
      {/* <Box marginLeft={'10rem'} paddingRight={'.35rem'} mt={'20'}> */}
      <Switch>
        <Suspense fallback={<Loader />}>
          <Route path="/video/:id">{(params) => <VideoContainerLazy params={params} />}</Route>
          <Route path="/" component={HomeContainerLazy} />
          <Route path="/history/all" component={HistoryContainerLazy} />
          <Route path="/liked-video" component={LikedContainerLazy} />
          <Route path="/unliked-video" component={UnLikedContainerLazy} />
          <Route path="/channels/:id">
            {(params: { id: string }) => <ChannelContainerLazy params={params} />}
          </Route>
        </Suspense>
      </Switch>
      {/* </Box> */}
    </>
  )
}

export default Routes
