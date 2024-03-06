import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="containerFooter">
        <Link to="/" href="#home" style={{ color: "white" }}>
          Mercadito
        </Link>
        <ul className="categories">
          <Link to="/">Correo</Link>
          <Link to="/">WhatsApp</Link>
          <Link to="/">Facebook</Link>
          <Link to="/">Instagram</Link>
        </ul>
      </div>
    </>
  );
};

export default Footer;