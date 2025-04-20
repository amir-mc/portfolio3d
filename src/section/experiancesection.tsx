import { useGSAP } from "@gsap/react";
import Glowcard from "../components/glowcard";
import TitleHeader from "../components/titleheader";
import { expCards } from "../data/worditem";
import gsap from "gsap";

const Experience = () => {

    useGSAP(() => {
        gsap.utils.toArray(".timeline-card").forEach((card) => {
          gsap.from(card as HTMLElement, {
            xPercent: -100,
            opacity: 0,
            transformOrigin: "left left",
            duration: 1,
            ease: "power2.inOut",
            scrollTrigger: {
              trigger: card as HTMLElement,
              start: "top 80%",
            },
          });
        });
        gsap.to(".timeline", {

          transformOrigin: "bottom bottom",
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: ".timeline",
            start: "top center",
            end: "70% center",
            onUpdate: (self) => {
              gsap.to(".timeline", {
                scaleY: 1 - self.progress,
              });
            },
          },
        });
    
        gsap.utils.toArray(".expText").forEach((text) => {
          gsap.from(text as HTMLElement, {
            opacity: 0,
            xPercent: 0,
            duration: 1,
            ease: "power2.inOut",
            scrollTrigger: {
              trigger: text as HTMLElement ,
              start: "top 60%",
            },
          });
        }, "<"); 
      }, []);
    
    return ( 
        <section id="experience" className="w-full md:mt-40 mt-20 section-padding xl:px-0">
            <div className="w-full h-full md:px-20 px-5">
                <TitleHeader title='Professional Project Experience' sub='my Project Overview' />
                <div className="mi-32 relative">
                    <div className="relative z-50 xl:space-y-32 space-y-10">
                        {expCards.map((card)=>(
                            <div className="exp-card-wrapper" key={card.title}>
                                <div className="xl:w-2/6">
                                    <Glowcard card={card} >
                                        <div>
                                           
                                        </div>
                                    </Glowcard>
                                    </div>


                <div className="xl:w-4/6 t-5">
                  <div className="flex items-start">
                    <div className="timeline-wrapper">
                      <div className="timeline" />
                      <div className="gradient-line w-1 h-full" />
                    </div>
                    <div className="expText flex xl:gap-20 md:gap-10 gap-5 relative z-20">
                      <div className="timeline-logo">
                        <img src={card.logoPath} alt="logo" />
                      </div>
                      <div>
                        <h1 className="font-semibold text-3xl">{card.title}</h1>
                        
                        <p className="text-[#839CB5] italic">
                          {card.art}
                        </p>
                        <ul className="list-disc ms-5 mt-5 flex flex-col gap-5 text-white-50">
                          {card.responsibilities.map(
                            (responsibility, index) => (
                              <li key={index} className="text-lg">
                                {responsibility}
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </section>
     );
}
 
export default Experience;