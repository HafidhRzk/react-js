import { Routes, Route } from "react-router-dom";

import Home from "../pages/home";
import Auth from "../pages/auth";
import Dashboard from "../pages/dashboard";

let Router = (
    <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/register" element={<Auth />} />
        <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
)

export default Router;