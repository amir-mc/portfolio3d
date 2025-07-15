import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

const Showcase = () => {
gsap.registerPlugin(ScrollTrigger)
    
        
        const sectionref =useRef(null)
        const project1Ref = useRef(null)
        const project2Ref = useRef(null)
        const project3Ref = useRef(null)
        // ERROR IN SHOWCASE 

        
        useGSAP(()=>{
            const  projects=[project1Ref.current , project2Ref.current,project3Ref.current]
        projects.forEach((card, index) => {
                gsap.fromTo(
                    card,{
                        y:50 ,opacity:0
                    },
                    {
                        y:0,
                        opacity:1,
                        duration:1,
                        delay:0.3 *(index+1),
                            //zamani ke be mahdode resid faaal shavad 
                        scrollTrigger:{
                            trigger:card,
                            start:'top bottom-=100'
                        }
                    }
                )
        });
            gsap.fromTo(
                sectionref.current,
                {opacity:0},
                {opacity:1,duration:1.5}
            )
        })
    
    return ( 
        <section ref={sectionref}  id="work" className="app-showcase">
            <div className="w-full">
                <div className="showcaselayout">
                {/* LEFT SIDE */}
                <div ref={project1Ref}  className="first-project-wrapper">
                    <div  className="image-wrapper">
                        <a href="https://github.com/amir-mc/mini-ecommerce">
                        <img src="/images/logos/digi.png" alt=""/>
                            
                        </a>
                    </div>
                    <div className="text-content">
                        <h2>
                            <span className="text-blue-300">DIGI</span>STORE
                        </h2>
                        <p className="text-white-50 md:text-xl">
                           The E-ecommerce web page !
                        </p>
                    </div>
                    </div>
                        {/* RIGHT SIDE */}
                        <div className="project-list-wrapper overflow-hidden">
                            <div className="project" ref={project2Ref}>
                                <div className="image-wrapper bg-[#ffefdb]">
                                    <a href="https://github.com/amir-mc/Blogin">
                                    <img src="/images/logos/blogin.png"  alt=""/>
                                    </a>
                                </div>
                                <h2>My personal blog</h2>
                            </div>
                            <div ref={project3Ref} className="project">
                                <div className="image-wrapper bg-[#ffe7eb]">
                                    <a href="https://github.com/amir-mc/buymcoff">
                                    <img src="/images/logos/web3.png" alt=""/>
                                    </a>
                                </div>

                                <h2>WEB 3.0 Buy me Coffee</h2>
                            </div>
                        </div>
                      
                    </div>
            </div>

        </section>
     );
    
}
 
export default Showcase;