// interface card{
//     review: string,
//     imgPath: string,
//     logoPath:string,
//     title: string,
//     date: string,
//     responsibilities: string,
//     children:React.ReactNode
// }

import { ReactNode } from "react";

// const Glowcard = ({ review,imgPath,logoPath,title,date,responsibilities,children}:card ) => {
    type GlowcardProps = {
        card: {review:string}; // or whatever type `card` actually is
        children: ReactNode;
      };
const Glowcard = ({ card,children}:GlowcardProps ) => {


    return ( 
        <div className="card card-border timeline-card rounded-xl p-10 ">
             <div className="glow "/>
                <div className=" flex items-center mb-5 gap-1">
                    {Array.from({length:5 },(_,i)=>(
                        <img src="/images/star.png" key={i} alt="" className="size-5"/>
                    ))}
                </div>
                <div className="mb-5">
                    <p className="text-while-50 text-lg">{card.review}</p>
                </div>
                    {children}
        </div>
     );
}
 
export default Glowcard;