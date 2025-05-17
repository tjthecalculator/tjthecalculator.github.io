import { Header, Footer } from "../layouts";
import { Navigation } from "../ui";

export const Layout = ({ children }) => {
    return (
        <div>
            <Header />
            <Navigation />
            <main>{children}</main>
            <Footer />
        </div>
    );
};