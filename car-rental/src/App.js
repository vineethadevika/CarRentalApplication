import "./App.css";
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import  Home  from "./Components/Pages/Home";
import  About   from "./Components/Pages/About";
import  Cars  from "./Components/Pages/Cars";
import  Contact  from "./Components/Pages/Contact";
import  Footer  from "./Components/Footer";
import UserLogin from './Components/Pages/userLogin';
import UserSignUp from "./Components/Pages/userSignup";
import OwnerLogin from "./Components/Pages/ownerLogin";
import AdminLogin from "./Components/Pages/adminLogin";
import OwnerSignUp from "./Components/Pages/ownerSignup";
//import UserDashboard from "./Components/Pages/UserDashboard";
//import OwnerDashboard from "./Components/Pages/OwnerDashboard";
//import AdminDashboard from "./Components/Pages/AdminDashboard";
function App() {
  return (
    <>
      <Router>

        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/cars" element={<Cars />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/user-login" element={<UserLogin />} />
            <Route path="/owner-login" element={<OwnerLogin />} />
            <Route path="/admin-login" element={<AdminLogin />} />
            <Route path="/user-signup" element={<UserSignUp />} />
            <Route path="/owner-signup" element={<OwnerSignUp />} />
            {/* <Route path="/userdashboard" element={<UserDashboard />} /> */}
            {/* <Route path="/ownerdashboard" element={<OwnerDashboard />} />
            <Route path="/admindashboard" element={<AdminDashboard />} /> */}
          </Routes>
        </div>
        <Footer />
      </Router>
  </>
  );
}

export default App;