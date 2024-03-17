import { Link } from "react-router-dom";
const Sidebar = () => {
    return ( 
        <div> 
           <nav>
                 <ul className="sidebar-nav">
                <li>
                    <Link to="/user-management">User Management</Link>
                    </li>
                <li>
                    <Link to="/faq">FAQ</Link>
                    </li>
                <li>
                    <Link to="/contact">Contact</Link>
                    </li>
            
                </ul> 

            </nav>
        </div>
    );
}

export default Sidebar;