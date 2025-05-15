import Taskbar from "./Taskbar";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
    return (
        <div className="layout">
            <Header />
            <Taskbar />
            <main>{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;