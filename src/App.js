import "./App.css";
import Home from "./Components/Home/Home";
import Signup from "./Components/Signup/Signup";
import Login from "./Components/Login/Login";
import Dashboard from "./Components/Dashboard/Dashboard";
import Stats from "./Components/Dashboard/State";
import AllProducts from "./Components/Dashboard/AllProducts";
import AddProduct from "./Components/Dashboard/AddProduct";
import Profile from "./Components/Dashboard/Profile";
import Edit from "./Components/Dashboard/Edit";
import Admin from "./Components/Admin/Admin";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <>
              <Dashboard />
              <Stats />
            </>
          }
        />
        <Route
          path="/dashboard/all-products"
          element={
            <>
              <Dashboard />
              <AllProducts />
            </>
          }
        />
        <Route
          path="/dashboard/add-product"
          element={
            <>
              <Dashboard />
              <AddProduct />
            </>
          }
        />
        <Route
          path="/dashboard/profile"
          element={
            <>
              <Dashboard />
              <Profile />
            </>
          }
        />
        <Route
          path="/dashboard/edit/:id"
          element={
            <>
              <Dashboard />
              <Edit />
            </>
          }
        />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </div>
  );
}

export default App;
