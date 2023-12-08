import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./page/login/login.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element="hi" />
        <Route path="/login" element=<Login /> />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
