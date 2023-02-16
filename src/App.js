import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/global.css";
import Home from "./pages/Home";
import List from "./pages/List";
import Detail from "./pages/Detail";
import Nav from "./template/Nav";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/list" element={<List />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
