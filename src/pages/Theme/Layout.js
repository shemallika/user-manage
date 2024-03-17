import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

const Layout = () => {
    return ( 
        <div>
            <Header/>

            <section>
            <Sidebar/>
            
            <article>
                <Outlet />
            </article>
            </section>

            <Footer/>
        </div>
    );
}

export default Layout;