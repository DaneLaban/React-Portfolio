import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";


export default function NavBar() {
    return (
        <header className="bg-blue-800">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">

                    {/* Style for my name (Home) in navbar */}
                    <NavLink to="/" 
                    exact 
                    className="inline-flex items-center py-6 px-3 mr-4 text-red-400 hover:text-yellow-300 text-4xl font-bold cursive tracking-widest"
                    activeClassName="text-white"
                    >
                        Dane
                    </NavLink>

                    {/* Style for blog in navbar */}
                    <NavLink to="/post"
                    className="inline-flex items-center py-3 px-3 my-6 rounded text-red-400 hover:text-yellow-300"
                    activeClassName="text-red-100 bg-red-700"
                    >
                        Blog Post
                    </NavLink>

                    {/* Style for projects in navbar */}
                    <NavLink to="/project"
                    className="inline-flex items-center py-3 px-3 my-6 rounded text-red-400 hover:text-yellow-300"
                    activeClassName="text-red-100 bg-red-700"
                    >
                        Projects
                    </NavLink>

                    {/* style for about in navbar */}
                    <NavLink to="/about"
                    className="inline-flex items-center py-3 px-3 my-6 rounded text-red-400 hover:text-yellow-300"
                    activeClassName="text-red-100 bg-red-700"
                    >
                        About Me
                    </NavLink>
                </nav>

                <div className="inline-flex py-3 px-3 my-6">
                    {/* Social Media icons to right of navbar */}
                    <SocialIcon url="https://twitter.com/siaki_24?lang=en" 
                    className="mr-4" 
                    target="_blank" 
                    fgColor="#fff" 
                    style={{ height: 35, width: 35}} 
                    />

                    <SocialIcon url="https://www.instagram.com/siaki_24/" 
                    className="mr-4" 
                    target="_blank" 
                    fgColor="#fff" 
                    style={{ height: 35, width: 35}} 
                    />
                    
                    <SocialIcon url="https://www.linkedin.com/in/dane-l-7a99301ba/" 
                    className="mr-4" 
                    target="_blank" 
                    fgColor="#fff" 
                    style={{ height: 35, width: 35}} 
                    />
                </div>
            </div>
        </header>
    )
}