import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/global.css";
import Home from "./pages/Home";
import List from "./pages/List";
import Detail from "./pages/Detail";
import Nav from "./template/Nav";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import About from "./pages/About";
import Partner from "./pages/Partner";
import Schedule from "./pages/Schedule";
import Faq from "./pages/Faq";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/list" element={<List />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/about" element={<About />} />
        <Route path="/partner" element={<Partner />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/faq" element={<Faq />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
