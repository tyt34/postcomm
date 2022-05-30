import Reg from '../Auth/Reg/Reg'
import Log from '../Auth/Log/Log'
import Profile from '../Profile/Profile'
import AllPosts from '../AllPosts/AllPosts'
import { HashRouter, Routes, Route, Navigate} from 'react-router-dom'
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
              <Reg/>
            </>
          } />
          <Route path="/log" element={
            <>
              <Log/>
            </>
          } />
          <Route path="/profile" element={
            <>
              <Profile/>
            </>
          } />
          <Route path={"/allposts/"+nowPageFromStore} element={
            <>
              <AllPosts/>
            </>
          } />
          <Route path="/*" element={<Navigate replace to="/log" />} />
        </Routes>
    </HashRouter>
  );
}

export default App;
