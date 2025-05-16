import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import About from "./pages/About.tsx";
import Home from "./pages/Home.tsx";
import Contact from "./pages/Contact.tsx";
import Projects from "./pages/Projects.tsx";
import NavBar from "./component/NavBar.tsx";


const UserLayout = () => {
    return (
        <div>
            <NavBar />
            <Outlet />
        </div>
    );
};

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<UserLayout />}>
                <Route index element={<Home />} />
                <Route path="aboutMe" element={<About />} />
                <Route path="contact" element={<Contact />} />
                <Route path="project" element={<Projects />} />
            </Route>
        </Routes>
    );
};

export default App;
