import { socialImgs } from "../data/worditem";

const Footer = () => {
    return ( 
        <footer className="footer">
        <div className="footer-container">
          <div className="flex flex-col justify-center">
            <p>Terms & Conditions</p>
          </div>
          <div className="socials">
            {socialImgs.map((itm) => (
              <div key={itm.name} className="icon">
                <a href={itm.link}>
                {itm.icon}
                </a>
              </div>
            ))}
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-center md:text-end">
              © {new Date().getFullYear()} Amir Fooladi. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
     );
}
 
export default Footer;