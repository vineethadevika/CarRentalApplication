import "./App.css";
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import  Home  from "./Components/Pages/Home";
import  About   from "./Components/Pages/About";
import  Cars  from "./Components/Pages/Cars";
import CarDetails from "./Components/Pages/CarDetails";
import  Contact  from "./Components/Pages/Contact";
import  Footer  from "./Components/Footer";
import UserLogin from './Components/Pages/userLogin';
import UserSignUp from "./Components/Pages/userSignup";
import OwnerLogin from "./Components/Pages/ownerLogin";
import AdminLogin from "./Components/Pages/adminLogin";
import OwnerSignUp from "./Components/Pages/ownerSignup";
import Sidebar from "./Components/Pages/Sidebar";
import Sidebar2 from "./Components/Pages/Sidebar2";
import Admin from "./Components/Pages/admin";
import NotFound from "./Components/Pages/Notfound";
function App() {
  return (
    <>
      <Router>
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/cars" element={<Cars />} />
            <Route path="/cars/:slug" element={<CarDetails />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/user-login" element={<UserLogin />} />
            <Route path="/owner-login" element={<OwnerLogin />} />
            <Route path="/admin-login" element={<AdminLogin />} />
            <Route path="/user-signup" element={<UserSignUp />} />
            <Route path="/owner-signup" element={<OwnerSignUp />} />
           <Route path="/userdashboard" element={<Sidebar/>}/>
           <Route path="/ownerdashboard" element={<Sidebar2/>}/>
           <Route path="/admin/*" element={<Admin/>}/>
           <Route path="*" element={<NotFound />} />
           {/* <Route path="/make-reservation" element={<Reservation/>}/>
           <Route path="/rental-history" element={<RentalHistory/>}/> */}
          </Routes>
        </div>
        <Footer />
      </Router>
  </>
  );
}

export default App;