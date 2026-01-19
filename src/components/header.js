'use client'

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header(){
    const[isOpen, setIsOpen]=useState(false);
    const menuItems=[
        {name: 'Home', href:'#main'},
        {name: 'About', href:'#about'},
        {name: 'Skills', href:'#skills'},
        {name: 'Experience', href:'#experience'},
        {name: 'Projects', href:'#projects'},
        {name: 'Contact', href:'#contact'}
    ]

    const scrollToSection=(href)=>{
        const element = document.querySelector(href);
        if (element){
            element.scrollIntoView({behaviour: 'smooth'});
            setIsOpen(!isOpen);
        }
    }

    return(
        <header className=" py-4 z-50 backdrop-blur bg-white/50 shadow-sm sticky top-0">
            <div className="flex justify-between px-6">
                <Link href="/">
                  <h3 className="text-semibold text-lg uppercase bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-transparent bg-clip-text"
                  >
                    Waqas Portfolio
                  </h3>
                </Link>
                <nav className="space-x-8 hidden md:flex">
                    {menuItems.map((menu)=>(
                        <Link key={menu.name} href={menu.href} className="pb-1 font-semibold hover:text-blue-600 hover:border-b-2 border-blue-600">{menu.name}</Link>
                    ))}                
                </nav>
    
                <div className="md:hidden cursor-pointer transition-all duration-300" onClick={()=>{setIsOpen(!isOpen)}}>
                    {isOpen? <X size={24}/> : <Menu size={24}/> }
                </div>
            </div>

            {isOpen &&(
                <div >
                   <div className=" absolute top-10 right-0 w-[40vw] h-[50vh] px-4 py-4 space-y-2 bg-white transition-all duration-300 rounded-lg" >
                     {menuItems.map((menu, idx)=>(
                        <button 
                        key={idx}
                        onClick={()=>{
                            scrollToSection(menu.href);
                        }}
                        className="text-black block w-full text-left p-1 font-semibold hover:text-blue-600 hover:border-b-2 border-blue-600 mb-2"
                        >
                            {menu.name}
                        </button>
                    ))}
                   </div>
                </div>
            )}

        </header>
    )
}