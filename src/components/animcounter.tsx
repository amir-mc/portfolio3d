import CountUp from "react-countup";
import { counterItems } from "../data/worditem";

const AnimatedCounter = () => {
    return ( 
        <div id="counter" className="padding-x-lg xl:mt-0 mt-32 ">
            <div className="max-auto grid-4-cols">
                {counterItems.map((items)=>(
                    <div key={items.label} className="bg-zinc-900 rounded-lg p-10 flex flex-col justify-center">
                        <div className="counter-number text-white text-5xl font-bold mb-2" >
                         <CountUp suffix= {items.suffix} end={items.value}/>  
                        </div>
                        <div className="text-white-50 text-lg">
                            {items.label}
                        </div>
                    </div>
                ))}
            </div>
        </div>
     );
}
 
export default AnimatedCounter;