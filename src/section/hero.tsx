import AnimatedCounter from "../components/animcounter";
import Button from "../components/button";
import HeroEx from "../components/heromodel/hero";
import { words } from "../data/worditem";

const Hero = () => {
    return ( 
        <section id="hero" className="relative overflow-hidden ">
            <div className="absolute top-0 left-0 z-10">
                <img src="/images/bg.png" alt=""/>
            </div>
            <div className="hero-layout">
                <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
                    <div className="hero-text">
                        <h1>|
                                <span className='slide'>
                                    <span className='wrapper'>
                                         {
                                        words.map((items)=>(
                                         <span className='flex items-center md:gap-3 gap-1 pb-2' key={items.text}>
                                               {items.icon} {items.text}
                                        </span> 
                                        ))
                                          }
                                    </span>
                                </span>     
                        </h1>
                    </div>
                    <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
                            Hi, i'm Amir , a Front-End developer.
                    </p>
                    <Button name="More" id="button" className="md:w-80 md:h-16 w-60 h-12"/>
                </header>
                {/* 3D model */}
                <figure>
                    <div className="hero-3d-layout">
                        <HeroEx/>
                    </div>
                </figure>
            </div>
            <AnimatedCounter/>
        </section>
     );
}
 
export default Hero;