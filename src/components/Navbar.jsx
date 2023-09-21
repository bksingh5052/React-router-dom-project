import React from "react";
import logo from "../assets/Logo.svg";
import { Link, NavLink} from "react-router-dom";
import toast from "react-hot-toast";

function NavBar({isLoggedIn,setIsLoggedIn}) {
  return (
    <div className="bg-black flex justify-evenly py-2 items-center w-screen">
      <Link to="/">
        <img src={logo} width={'160px'} height={'40px'} alt="" />
      </Link>

      <nav>
        <ul className="text-white flex gap-3">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Contact Us</Link>
          </li>
        </ul>
      </nav>
      <div className="flex gap-3">
        { !isLoggedIn &&
            <NavLink
            className={({isActive}) =>
            `text-white bg-neutral-800 border border-neutral-700 px-4 py-2 rounded-md ${isActive? "text-red-500":""}`
        }
             to='login'>
            <button 
          
            >Login</button>
            </NavLink>
        }
        { !isLoggedIn &&
            <NavLink 
            className={({isActive}) =>
            `text-white bg-neutral-800 border border-neutral-700 px-4 py-2 rounded-md ${isActive? "text-red-500":""}`
        }
            to='signup'>
            <button >Sign Up</button>
            </NavLink>
        }
        { isLoggedIn &&
            <NavLink 
            className={({isActive}) =>
            `text-white bg-neutral-800 border border-neutral-700 px-4 py-2 rounded-md ${isActive? "text-red-500":""}`
        }
            to='/'>
            <button 
            onClick={()=>{
                setIsLoggedIn(false)
                toast.success('Logged Out')
            }}>
                Logout
                </button>
            </NavLink>
        }
        {  isLoggedIn &&
            <NavLink 
            className={({isActive}) =>
            `text-white bg-neutral-800 border border-neutral-700 px-4 py-2 rounded-md ${isActive? "text-red-500":""}`
        }
            to='dashboard'>
            <button>Dashboard</button>
            </NavLink>
        }
        
      </div>
    </div>
  );
}

export default NavBar;
