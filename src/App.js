import { Route, Routes } from "react-router-dom";
import './App.scss';
import Navbar from './components/navbar';
import Blog from "./containers/blog";
import Portal from "./containers/developer";
import EcoGlobal from "./containers/ecosystem";
import Home from './containers/home';
import Introduction from "./containers/intro";

function App() {
  return (
   <>
  <Navbar/>
  <Routes>
    <Route path='*' element={<Home/>}/>
    <Route path="/introduction" element={<Introduction/>}/>
    <Route path="/ecosystem" element={<EcoGlobal/>}/>
    <Route path="/development" element={<Portal/>}/>
    <Route path="/blogs" element={<Blog/>}/>
  </Routes>
 
   </>
  );
}

export default App;
