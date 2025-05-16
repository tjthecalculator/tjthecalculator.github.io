import { Route, Routes, useLocation } from "react-router-dom";
import { Home, Skills, Educations, Projects, Experiences } from "@/pages";
import { Header, Footer } from "@/components/Layouts";
import { useEffect } from "react";

const Router = () => {

    const location = useLocation();

    const pages = [
        {path: "/", title: "TJ the Calculator", component: <Home />},
        {path: "/skills", title: "Skills", component: <Skills />},
        {path: "/educations", title: "Educations", component: <Educations />},
        {path: "/projects", title: "Projects", component: <Projects />},
        {path: "/experiences", title: "Experiences", component: <Experiences />},
    ];

    useEffect(() => {
        const currentPage = pages.find(page => page.path === location.pathname);
        document.title = currentPage ? currentPage.title : "TJ the Calculator";
    }, [location]);

    return (
        <Routes>
            {pages.map(({ path, component: Component }) => (
                <Route key={path} path={path} element={<><Component /></>} />
            ))}
        </Routes>
    );
};

export default Router;