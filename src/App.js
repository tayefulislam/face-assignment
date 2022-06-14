import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Register from './Pages/Register/Register';
function App() {
  return (
    <div>

      <Routes>
        <Route path='/register' element={<Register></Register>}></Route>
      </Routes>



    </div>
  );
}

export default App;
