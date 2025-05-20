import { Route, Routes, useLocation } from "react-router-dom";
import { Home, Skills, Educations, Projects, Experiences, Contacts } from "@/pages";
import { Layout } from "@/components/common";
import { useEffect } from "react";

const Router = () => {

    const location = useLocation();

    const pages = [
        {path: "/", title: "TJ the Calculator - Home", component: <Home />},
        {path: "/skills", title: "TJ the Calculator - Skills", component: <Skills />},
        {path: "/educations", title: "TJ the Calculator - Educations", component: <Educations />},
        {path: "/projects", title: "TJ the Calculator - Projects", component: <Projects />},
        {path: "/experiences", title: "TJ the Calculator - Experiences", component: <Experiences />},
        {path: "/contacts", title: "TJ the Calculator - Contacts", component: <Contacts />},
    ];

    useEffect(() => {
        const currentPage = pages.find(page => page.path === location.pathname);
        document.title = currentPage ? currentPage.title : "TJ the Calculator";
    }, [location]);

    return (
        <Routes>
            {pages.map(({ path, component: Component }) => (
                <Route key={path} path={path} element={<Layout children={ Component }/>} />
            ))}
        </Routes>
    );
};

export default Router;