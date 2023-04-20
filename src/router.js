import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
import { routerConfig } from './constants'
import {
  LazyAllPostsPage,
  LazyAllUserPage,
  LazyLogginPage,
  LazyPostPage,
  LazyProfilePage,
  LazyRegistrationPage
} from './pages'

export const RoutersComponent = () => {
  return (
    <HashRouter basename={'/'}>
      <Routes>
        <Route
          path="/"
          element={<Navigate replace to={routerConfig.log.url} />}
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
          element={<Navigate replace to={routerConfig.log.url} />}
        />
      </Routes>
    </HashRouter>
  )
}
