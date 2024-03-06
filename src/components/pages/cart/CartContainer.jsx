import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const CartContainer = () => {
  return (
    <div>
      <h2>Desarrollando carrito de compras...</h2>
      <Link to="/checkout">
        <Button variant="contained">Terminar compra</Button>
      </Link>
    </div>
  )
}

export default CartContainer;