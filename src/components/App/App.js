import { HashRouter, Routes, Route, Navigate, useParams} from 'react-router-dom'
import AllPosts from '../AllPosts/AllPosts'
import AllUsers from '../AllUsers/AllUsers'
import Log from '../Auth/Log/Log'
import Nav from '../Nav/Nav'
import Post from '../Post/Post'
import Profile from '../Profile/Profile'
import Reg from '../Auth/Reg/Reg'

const BASENAME = process.env.REACT_APP_BASENAME
let base
if (BASENAME === undefined) {
  base = '/' // тут должно будет быть правильное имя
} else {
  base = BASENAME
}

function App() {
  return (
    <HashRouter basename={base}>
        <Routes>
          <Route path="/" element={<Navigate replace to="/log" />} />
          <Route path="/reg" element={
            <>
              <Reg />
            </>
          } />
          <Route path="/log" element={
            <>
              <Log />
            </>
          } />
          <Route path="/profile" element={
            <>
              <Nav />
              <Profile />
            </>
          } />
          <Route path="/allusers" element={
            <>
              <Nav />
              <AllUsers />
            </>
          } />
          <Route path={"/allposts/:nameUser"} element={
            <>
              <Nav />
              <AllPosts />
            </>
          } />
          <Route path={"/post/:idPost"} element={
            <>
              <Nav />
              <Post />
            </>
          } />
          <Route path="/*" element={<Navigate replace to="/log" />} />
        </Routes>
    </HashRouter>
  );
}

export default App;
