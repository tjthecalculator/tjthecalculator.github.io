import { Header, Footer, Navigations } from "../layouts";

export const Layout = ({ children }) => {
    return (
        <div>
            <Header />
            <Navigations />
            <main>{children}</main>
            <Footer />
        </div>
    );
};