import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
const {user, logOutUser} = useContext(AuthContext)
    const links = <>
           <li className="text-lg font-semibold"><NavLink to={'/'} >Home</NavLink></li>
           <li className="text-lg font-semibold"><NavLink to={'/addProduct'} >Add Product</NavLink></li>
           <li className="text-lg font-semibold"><NavLink to={'/myCart'} >My Cart</NavLink></li>
           <li className="text-lg font-semibold"><NavLink to={'/aboutUs'} >About Us</NavLink></li>
    </>

  return (
    <div>
      <div className="navbar  border-b-4  ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu bg-slate-500 space-y-1 py-4 text-white menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52"
            >
            {links}
            </ul>
          </div>
          <img className="w-20 h-20 md:w-28 rounded-full" src={'https://i.ibb.co/QpPQ0cG/Screenshot-4.jpg'} />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {links}
          </ul>
        </div>
        <div className="navbar-end">
        {/* <input type="checkbox" className="toggle mr-5"  /> */}
        <ThemeToggle/>
        <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-20 rounded-full">
              {
                user?.photoURL ? <img src={user?.photoURL} /> : <img className="" src={'https://i.ibb.co/9wyj6d4/download.jpg'} />
              }
                
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-slate-500 py-5 space-y-1  text-white rounded-box w-52"
            >
              <li >
                <a className="justify-between text-xl">
                  {user?.displayName ? user?.displayName : <p>Profile</p>}
                </a>
              </li>
              <li><Link className="text-lg" to={'/register'}>Register</Link></li>
              <li>
                {user ? <button className="text-lg" onClick={()=> logOutUser()} >Logout</button> : <Link className="text-lg" to={'/login'} ><button>Login</button></Link>}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
