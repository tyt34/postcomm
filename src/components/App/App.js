import Reg from '../Auth/Reg/Reg'
import Log from '../Auth/Log/Log'
import Profile from '../Profile/Profile'
import AllPosts from '../AllPosts/AllPosts'
import AllUsers from '../AllUsers/AllUsers'
import Post from '../Post/Post'
import Nav from '../Nav/Nav'
import { HashRouter, Routes, Route, Navigate, useParams} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
const BASENAME = process.env.REACT_APP_BASENAME
let base
if (BASENAME === undefined) {
  base = '/' // тут должно будет быть правильное имя
} else {
  base = BASENAME
}
//const nowPageFromStore = 'a'

function App() {

  const nowPageFromStore = useSelector( store => store.allPostsIdUser)

  return (
    <HashRouter basename={base}>
        <Routes>
          <Route path="/" element={
            <>
              hello
            </>
          } />
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
          <Route path={"/allposts/:idPost"} element={
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
/*
<Route path={"/allposts/"+nowPageFromStore} element={
  <>
    <AllPosts/>
  </>
} />
*/
