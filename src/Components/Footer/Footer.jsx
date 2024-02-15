import React from "react";
import {Link,NavLink} from 'react-router-dom'

export default function Footer(){
    return (
        <footer className="bg-white border-y">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <Link
                        to="/"
                        className="flex items-center">
                             <h1 className="text-3xl">LOGO</h1>
                        </Link>

                    </div>
                <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Resources</h2>
                        <ul className="text-gray-500 font-medium">
                            <li className="mb-4">
                                <NavLink to="/" className={({isActive})=>`hover:underline ${isActive?"text-orange-700":"text-gray-500"}`}>
                                Home
                                </NavLink>
                            </li>
                            <li className="mb-4">
                            <NavLink to="/About" className={({isActive})=>`hover:underline ${isActive?"text-orange-700":"text-gray-500"}`}>
                                About
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Follow Us</h2>
                        <ul className="text-gray-500 medium">
                            <li className="mb-4">
                                <a 
                                href="#"
                                className="hover:underline"
                                target="_blank"
                                rel="noreferrer">
                                    Github
                                </a>
                            </li>
                            <li>
                                <Link to="/" className="hover:underline">
                                    Discord
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Legal</h2>
                        <ul className="text-gray-500 medium">
                            <li className="mb-4">
                            <Link to="#" className="hover:underline">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className="hover:underline">
                                    Terms &amp; Conditions
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>    
                </div>
                
            </div>

        </footer>
    );
}