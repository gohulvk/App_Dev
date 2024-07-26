import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./components/Login/login";
import Register from "./components/Register/Register";
import Home from "./components/Home/Home";
import PrivateRouter from "./components/Context/Private_Router";
import Header from "./components/Header/Header";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRouter>
          <Home/>
          </PrivateRouter>
        }
      />

      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/header" element={<Header/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
