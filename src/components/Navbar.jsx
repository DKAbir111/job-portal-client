import { useContext } from "react"
import { Link, NavLink } from "react-router-dom"
import AuthContext from "../Context/AuthContext"


export default function Navbar() {
    const { logOut, user } = useContext(AuthContext)
    const links = <>
        <li><NavLink to={'/'}>Home </NavLink> </li>
        {
            user?.email && <>
                <li><NavLink to={'/add-job'}>Add Jobs </NavLink> </li>
                <li><NavLink to={'/find-job'}>Find Jobs </NavLink> </li>
            </>
        }
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user?.email ? <button className="btn btn-secondary" onClick={logOut}>Log out</button> : <div className="flex items-center gap-3">
                        <Link to={'/login'} className="btn btn-primary">Log in</Link>
                        <Link to={'/register'} className="btn btn-primary">Register</Link>
                    </div>

                }
            </div>
        </div>
    )
}
