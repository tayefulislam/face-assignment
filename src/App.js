import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Register from './Pages/Register/Register';
import Login from './Pages/Login/Login';
import Navbar from './Pages/Navbar/Navbar';
import auth from './firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import Home from './Pages/Home/Home';
import RequireAuth from './Pages/Auth/RequireAuth';
function App() {

  const [user, loading, error] = useAuthState(auth);


  return (

    <div>

      {
        user && <Navbar></Navbar>
      }


      <Routes>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/' element={<RequireAuth><Home></Home></RequireAuth>}></Route>
      </Routes>

    </div>
  );
}

export default App;
