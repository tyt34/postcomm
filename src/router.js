import { Suspense, lazy } from 'react'
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
import { routerConfig } from './constants'
import { Loading } from './components'

const LazyAllPostsPage = lazy(() =>
  import('./pages/all-posts-page/all-posts-page.js')
)

const LazyAllUserPage = lazy(() =>
  import('./pages/all-users-page/all-users-page.js')
)
const LazyLogginPage = lazy(() => import('./pages/loggin/loggin.js'))

const LazyPostPage = lazy(() =>
  import('./pages/post-page/post-page.js')
)

const LazyProfilePage = lazy(() =>
  import('./pages/profile-page/profile-page.js')
)

const LazyRegistrationPage = lazy(() =>
  import('./pages/registration/registration.js')
)

export const RoutersComponent = () => {
  return (
    <HashRouter basename={'/'}>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route
            path="/"
            element={
              <Navigate
                replace
                to={routerConfig.log.url}
              />
            }
          />
          <Route
            path={routerConfig.reg.url}
            element={<LazyRegistrationPage />}
          />
          <Route
            path={routerConfig.log.url}
            element={<LazyLogginPage />}
          />
          <Route
            path={routerConfig.profile.url}
            element={<LazyProfilePage />}
          />
          <Route
            path={routerConfig.allusers.url}
            element={<LazyAllUserPage />}
          />
          <Route
            path={routerConfig.allposts.parametrUrl}
            element={<LazyAllPostsPage />}
          />
          <Route
            path={routerConfig.post.parametrUrl}
            element={<LazyPostPage />}
          />
          <Route
            path="/*"
            element={
              <Navigate
                replace
                to={routerConfig.log.url}
              />
            }
          />
        </Routes>
      </Suspense>
    </HashRouter>
  )
}
