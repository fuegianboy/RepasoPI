import {Route, BrowserRouter, Routes} from "react-router-dom"

import Create from './views/create/create.component';
import Detail from './views/detail/detail.component';
import Home from './views/home/home.component';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/home/:id" element={<Detail/>}/>
        <Route path="/create" element={<Create/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
