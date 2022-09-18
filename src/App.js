import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './componants/Cart/Cart';
import Dashboard from './componants/Dashboard/Dashboard';
import Home from './componants/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
      </Routes>
    </div>
  );
}

export default App;
