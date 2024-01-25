import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Women from "./components/Women";
import Mens from "./components/Mens";
import Loginf from "./components/Loginf";
import Register from "./components/Register" ;
import Header from "./components/Header";
import Grossery from "./components/Grossery";
import Electronic from "./components/Electronic";

 // Make sure the path is correct


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
        <Route index element={<Header/>}/>
        <Route path="/login" element={<Loginf />} />
        <Route path="/Register" element={<Register/>}/>
        <Route path="/Women" element={<Women/>}/>
        <Route path="/Mens" element={<Mens/>}/>
        <Route path="/Grossery" element={<Grossery/>}/>
        <Route path="/Electronic" element={<Electronic/>}/>
        
        </Route>
      </Routes>
     
    </BrowserRouter>
  );
}

export default App;