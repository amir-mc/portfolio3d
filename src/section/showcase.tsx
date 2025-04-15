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
                        <img src="/images/project1.png" alt=""/>
                    </div>
                    <div className="text-content">
                        <h2>
                            site
                        </h2>
                        <p className="text-white-50 md:text-xl">
                            Aliqua velit duis qui amet consectetur reprehenderit laborum ea tempor in culpa culpa voluptate excepteur.
                        </p>
                    </div>
                    </div>
                        {/* RIGHT SIDE */}
                        <div className="project-list-wrapper overflow-hidden">
                            <div className="project" ref={project2Ref}>
                                <div className="image-wrapper bg-[#ffefdb]">
                                    <img src="images/project2.png" alt=""/>
                                </div>
                                <h2>site</h2>
                            </div>
                            <div ref={project3Ref} className="project">
                                <div className="image-wrapper bg-[#ffe7eb]">
                                    <img src="images/project3.png" alt=""/>
                                </div>
                                <h2>site</h2>
                            </div>
                        </div>
                    
                    </div>
            </div>

        </section>
     );
    
}
 
export default Showcase;