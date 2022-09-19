import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './componants/Cart/Cart';
import Dashboard from './componants/Dashboard/Dashboard';
import Products from './componants/Dashboard/Products';
import Home from './componants/Home';
import Error from './componants/Pages/Error';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='*' element={<Error/>}></Route>
        
        <Route path='/dashboard' element={<Dashboard />}>
          <Route index element={<Products/>}></Route>
          <Route path='cart' element={<Cart/>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
