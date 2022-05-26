import Reg from '../Auth/Reg/Reg'
import { HashRouter, Routes, Route} from 'react-router-dom'
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
        </Routes>
    </HashRouter>
  );
}

export default App;
