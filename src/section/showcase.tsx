import { useRef } from "react";

const Showcase = () => {
    const showsection=()=>{
        const sectionref = useRef(null)
        const project1Ref = useRef(null)
        const project2Ref = useRef(null)
        const project3Ref = useRef(null)
        // ERROR IN SHOWCASE 
    }
    return ( 
        <section  id="work" className="app-showcase">
            <div className="w-full">
                {/* LEFT SIDE */}
                <div  className="first-project-wrapper">
                    <div className="image-wrapper">
                        <img src="/images/project1.png" alt=""/>
                    </div>
                    <div className="text-content">
                        <h2>
                            site
                        </h2>
                        <p className="text-white-50 md:text-xl">
                            Aliqua velit duis qui amet consectetur reprehenderit laborum ea tempor in culpa culpa voluptate excepteur.
                        </p>
                        {/* RIGHT SIDE */}
                        <div className="project-list-wrapper overflow-hidden">
                            <div className="project">
                                <div className="image-wrapper bg-[#ffefdb]">
                                    <img src="images/project2.png" alt=""/>
                                </div>
                                <h2>site</h2>
                            </div>
                            <div className="project">
                                <div className="image-wrapper bg-[#ffe7eb]">
                                    <img src="images/project3.png" alt=""/>
                                </div>
                                <h2>site</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
     );
}
 
export default Showcase;