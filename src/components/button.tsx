interface botton{
    id:string
    name:string,
    className?:string
}

const Button = ({name,className,id}:botton) => {
    return ( 
        <a
        onClick={(e)=>{
            e.preventDefault()
            const target= document.getElementById('counter')
            if(target && id){
                const offset= window.innerHeight * 0.15;
                const top = target.getBoundingClientRect().top + window.screenY - offset;
                window.scrollTo({top,behavior:'smooth'})
            }
        }}
        className={`${className} cta-wrapper`}>
            <div className="cta-button group ">
            <div className="bg-circle"/>
            <span className='text'>
                {name}
            </span>
            <div className="arrow-wrapper text-black">
                <img src="/images/arrow-down.svg" alt="" />
            </div>
            </div>
        </a>
     );
}
 
export default Button;