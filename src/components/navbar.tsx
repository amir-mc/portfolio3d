import { useEffect, useState } from "react";
import { navLinks } from "../data/worditem";


const Navbar = () => {
    const [scrolled ,setscroll]=useState(false)
    
    useEffect(()=>{
        const handleScroll= ()=>{
            const isScroll= window.scrollY > 10;
            setscroll(isScroll);
        }
        window.addEventListener('scroll' ,handleScroll)
        return()=>window.removeEventListener('scroll',handleScroll)
    }, [])
    return ( 
        <header className={`navbar ${scrolled ? 'scrolled':'not-scrolled'}`}>
            <div className="inner">
                <a className="logo" href="#hero"> 
                    Amir | 
                </a>

                <nav className="desktop">
                     <ul>
                        {
                            navLinks.map((items)=>(
                                <li key={items.link} className="group">
                                    <a href={items.link}>
                                        <span>{items.name}</span>
                                        <span className="underline"/>
                                    </a>
                                </li>
                            ))
                        }
                     </ul>
                </nav>
               <div className="flex items-center space-x-4">
                    {/* Personal Blog Link (Purple) */}
                    <a 
                        href="https://blogin-two.vercel.app/" 
                        className="group relative inline-block"
                    >
                        <div className="inner px-4 py-2 bg-white rounded-lg transition-all duration-300
                                        group-hover:-translate-y-0.5
                                        group-hover:shadow-[0_8px_16px_-3px_rgba(147,51,234,0.4)]">
                        <span className="text-gray-800 font-medium">My Personal Blog |</span>
                        </div>
                    </a>

                    {/* Buy Me Coffee Link (Blue) */}
                    <a 
                        href="https://buymcoff.vercel.app/" 
                        className="group relative inline-block"
                    >
                        <div className="inner px-4 py-2 bg-white rounded-lg transition-all duration-300
                                        group-hover:-translate-y-0.5
                                        group-hover:shadow-[0_8px_16px_-3px_rgba(59,130,246,0.4)]">
                        <span className="text-gray-800 font-medium">Buy Me a Coffee</span>
                        </div>
                    </a>
                    </div>
                
            </div>
        </header>
     );
}
 
export default Navbar;