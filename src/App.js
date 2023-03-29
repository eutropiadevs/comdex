import { Route, Routes } from "react-router-dom";
import './App.scss';
import Navbar from './components/navbar';
import Home from './containers/home';
import Introduction from "./containers/intro";

function App() {
  return (
   <>
  <Navbar/>
  <Routes>
    <Route path='*' element={<Home/>}/>
    <Route path="/introduction" element={<Introduction/>}/>
  </Routes>
 
   </>
  );
}

export default App;
