interface botton{
    name:string,
    className?:string
}

const Button = ({name,className}:botton) => {
    return ( 
        <a className={`${className} cta-wrapper`}>
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