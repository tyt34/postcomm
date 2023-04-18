import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
import {
  AllPostPage,
  AllUserPage,
  Loggin,
  PostPage,
  ProfilePage,
  Reg
} from './pages'

export const RoutersComponent = () => {
  return (
    <HashRouter basename={'/'}>
      <Routes>
        <Route path="/" element={<Navigate replace to="/log" />} />
        <Route path="/reg" element={<Reg />} />
        <Route path="/log" element={<Loggin />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/allusers" element={<AllUserPage />} />
        <Route path={'/allposts/:nameUser'} element={<AllPostPage />} />
        <Route path={'/post/:idPost'} element={<PostPage />} />
        <Route path="/*" element={<Navigate replace to="/log" />} />
      </Routes>
    </HashRouter>
  )
}
