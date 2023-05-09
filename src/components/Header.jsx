import { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link, NavLink } from 'react-router-dom';
import logo from './../assets/images/Logo.svg';
import { useAuth } from '../context/AuthProvider';
import { AiOutlineLogin } from "react-icons/ai";


const Header = () => {
    const [toggle, setToggle] = useState(false)
    const {user,loading, logOut} = useAuth()
    const [userStutus, setUserStutus] = useState(false)
    console.log(user)

    // if(user) {
    //     setUserStutus(true)
    // }
    return (        
            <nav className='bg-primary text-white z-50 sticky top-0'>                
                <section className='headerContainer'>
                    <Link to="/">
                        <img src={logo} alt="logo" />
                    </Link>
                    {!toggle ? <AiOutlineMenu onClick={() => {setToggle(!toggle)}} className='text-2xl md:hidden block'/> : <AiOutlineClose onClick={() => {setToggle(!toggle)}} className='text-2xl md:hidden block'/>}
                    
                    <ul className='hidden md:flex gap-5'>
                        <NavLink onClick={() => setToggle(!toggle)} to="/shop">Shop</NavLink>
                        <NavLink onClick={() => setToggle(!toggle)} to="/order">Order</NavLink>
                        <NavLink onClick={() => setToggle(!toggle)} to="/order-review">Order Review</NavLink>
                        <NavLink onClick={() => setToggle(!toggle)} to="/manage-inventory">Manage Inventory</NavLink>
                    </ul>
                    {/* responsive  */}
                    <ul className={`flex flex-col duration-300 md:hidden gap-5 fixed top-[68px] z-50 ${!toggle ? 'left-[-100%]' : 'left-0'} bg-black w-full h-screen`}>
                        <NavLink onClick={() => setToggle(!toggle)} className="p-3" to="/shop">Shop</NavLink>
                        <NavLink onClick={() => setToggle(!toggle)} className="p-3" to="/order">Order</NavLink>
                        <NavLink onClick={() => setToggle(!toggle)} className="p-3" to="/order-review">Order Review</NavLink>
                        <NavLink onClick={() => setToggle(!toggle)} className="p-3" to="/manage-inventory">Manage Inventory</NavLink>
                        <NavLink onClick={() => setToggle(!toggle)} className="p-3" to="/login">Login</NavLink>
                        <NavLink onClick={() => setToggle(!toggle)} className="p-3" to="/sign-up">Sign Up</NavLink>
                    </ul>
                    <h2 className='hidden md:block'>{loading ? "" : user === null ?  <div><NavLink onClick={() => setToggle(!toggle)} to="/login">Login</NavLink> <span> / </span>
                        <NavLink onClick={() => setToggle(!toggle)} to="/sign-up">Sign Up</NavLink></div> : <div className='flex items-center gap-3'><span>{user.email}</span><AiOutlineLogin onClick={logOut} className='text-xl cursor-pointer'/></div>  }</h2>
                    
                </section>                
            </nav>        
    );
};

export default Header;