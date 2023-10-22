import Logo from "../image/logo.png";
import "./Header.css";
export default function Header(){   
    return (
   
        <nav>
            <img src={Logo} alt="logo" className="logo" />
            <a href="/">ទំព័រដើម</a>
        </nav>
    
    )
}

