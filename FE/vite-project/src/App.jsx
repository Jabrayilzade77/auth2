import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from './layout/MainLayout';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Admin from './pages/Admin/Admin';
function App() {
  

  return (
    <>
      <BrowserRouter>
      <Routes>
       <Route path='/' element={<MainLayout/>}>
        <Route index element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/admin' element={<Admin/>}/>
       </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
