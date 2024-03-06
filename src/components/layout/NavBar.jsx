import { Link } from "react-router-dom";
import CartWidget from "../common/CartWidget";
import "./NavBar.css";

const NavBar = () => {
  return (
    <>
      <div className="containerNavBar">
        <Link to="/" href="#home" style={{ color: "white" }}>
          Mercadito
        </Link>
        <ul className="categories">
          <Link to="/">Todas</Link>
          <Link to="/category/camisas">Camisas</Link>
          <Link to="/category/pantalones">Pantalones</Link>
          <Link to="/category/zapatos">Zapatos</Link>
        </ul>
        <CartWidget />
      </div>
    </>
  );
};

export default NavBar;