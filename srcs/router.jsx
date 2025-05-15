import React, { useEffect } from "react";
import Home from "./pages/Home/Home";
import Education from "./pages/Education/Education";
import Projects from "./pages/Projects/Projects";
import Skills from "./pages/Skills/Skills";
import Experience from "./pages/Experience/Experience";
import Layout from "./components/Layout";
import { Routes, Route, useLocation } from "react-router-dom";

const Router = () => {

    const location = useLocation();

    const pages = [
        {path: "/", title: "TJ The Calculator", component: Home},
        {path: "/skills", title: "TJ The Calculator - Skills", component: Skills},
        {path: "/education", title: "TJ The Calculator - Education", component: Education},
        {path: "/projects", title: "TJ The Calculator - Projects", component: Projects},
        {path: "/experience", title: "TJ The Calculator - Experience", component: Experience},
    ]

    useEffect(() => {
        const currentPage = pages.find(page => page.path === location.pathname);
        document.title = currentPage ? currentPage.title : "TJ The Calculator";
    }, [location]);

    return (
        <Routes>
            {pages.map(({ path, component: Component }) => (
                <Route key={path} path={path} element={<Layout><Component /></Layout>} />
            ))}
        </Routes>
    );
};

export default Router;