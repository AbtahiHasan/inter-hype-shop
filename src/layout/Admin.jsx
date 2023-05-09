import { Outlet } from "react-router-dom";
import AdminNavbar from "../admin/components/AdminNavbar";


const Admin = () => {
    return (
        <div>
            <AdminNavbar/>
            <Outlet/>
        </div>
    );
};

export default Admin;