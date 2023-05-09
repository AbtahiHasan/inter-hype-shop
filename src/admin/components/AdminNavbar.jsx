import { NavLink } from "react-router-dom";


const AdminNavbar = () => {
    return (
        <nav className="bg-[#1C2B35] text-white ">
            <div className="px-3 max-w-[1200px] mx-auto py-2 flex justify-between items-center">
            <h2 className="text-3xl font-bold">InterHype Admin</h2>
            <ul className="flex items-center gap-3">
                <li>
                    <NavLink className={({isActive}) => isActive ? "font-bold underline" : ""} to="/pvt-contro-panel/products">All Product</NavLink>
                </li>
                <li>
                    <NavLink className={({isActive}) => isActive ? "font-bold underline" : ""} to="/pvt-contro-panel/add-product">Add Product</NavLink>
                </li>
            </ul>
            </div>
        </nav>
    );
};

export default AdminNavbar;