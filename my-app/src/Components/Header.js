import Face from "../images/troll-face.png";
import "../Styles/Header.css";

function Header() {

    return(
       <header className="header">
        <img src={Face} alt="troll-face" className="header-image" />
        <h2 className="header-title">Meme Generator</h2>
        
       </header>
    )

}
export default Header;