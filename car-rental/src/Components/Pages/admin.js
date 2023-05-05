import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminDashboard from './adminDashboard';
import Users from './adminpages/Users';
import CarOwners from './adminpages/CarOwners';
import Cars from './adminpages/Cars';
import CarStatus from './adminpages/CarStatus';
import CarHistory from './adminpages/CarHistory';
import ManageUsers from './adminpages/ManageUsers';
import ManageCarOwners from './adminpages/ManageCarOwners';
import ManageCars from './adminpages/ManageCars';
import ManageAdvertisements from './adminpages/ManageAdvertisements';
const Admin= () => {
    return (
        <AdminDashboard>
          <Routes>
            <Route path="/users" element={<Users/>} />
            <Route path="/viewallowners" element={<CarOwners/>} />
            <Route path="/cars" element={<Cars/>} />
            <Route path="/viewstatus" element={<CarStatus/>} />
            <Route path="/carhistory" element={<CarHistory/>} />
            <Route path="/manageusers" element={<ManageUsers/>} />
            <Route path="/managecarowners" element={<ManageCarOwners/>} />
            <Route path="/managecars" element={<ManageCars/>} />
            <Route path="/manageadvertisements" element={<ManageAdvertisements/>} />
          </Routes>
        </AdminDashboard>
    );
  };
  
  export default Admin;