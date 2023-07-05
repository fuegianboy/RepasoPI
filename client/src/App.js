import './App.css';
import Create from './views/create/create.component';
import Detail from './views/detail/detail.component';
import Home from './views/home/home.component';


function App() {
  return (
    <div className="App">
      <Home/>
      <Detail/>
      <Create/>
    </div>
  );
}

export default App;
