import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./components/Login/login";
import Register from "./components/Register/Register";
import Home from "./components/Home/Home";
import PrivateRouter from "./components/Context/Private_Router";
import Header from "./components/Header/Header";
import Schedule from "./components/schedule/Schedule";
import Profile from "./components/profile/Profile";
import Tracker from "./components/tracker/Tracker";
import ManageShipments from "./components/Manage/ManageShipments";
import Aboutus from "./components/aboutus/Aboutus";
import Contactus from "./components/contactus/Contactus";
import Findloc from "./components/findloc/Findloc";
import Fuelsurch from "./components/fuelsurch/Fuelsurch";
import FAQ from "./components/faq/FAQ";
import Footer from "./components/footer/Footer";

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

      <Route path="/home" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/header" element={<Header/>}/>
      <Route path="/schepic" element={<Schedule/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/tracker" element={<Tracker/>}/>
      <Route path="/manageship" element={<ManageShipments/>}/>
      <Route path="/aboutus" element={<Aboutus/>}/>
      <Route path="/contactus" element={<Contactus/>}/>
      <Route path="/findloc" element={<Findloc/>}/>
      <Route path="/fuelsurch" element={<Fuelsurch/>}/>
      <Route path="/FAQ" element={<FAQ/>}/>
      <Route path="/footer" element={<Footer/>}/>
      

    </Routes>
    </BrowserRouter>
  );
}

export default App;
