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
                <a href="blogin-two.vercel.app" className="contant-btn group ">
                    <div className="inner">
                        <span>
                            My Personal Blog
                        </span>
                    </div>
                </a>
            </div>
        </header>
     );
}
 
export default Navbar;