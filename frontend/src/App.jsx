import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./page/login/login.jsx";
import Home from "./page/home/home.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element=<Home /> />
        <Route path="/login" element=<Login /> />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
