import { useState } from "react";
import ItemCount from "./ItemCount";

const ItemCountContainer = ({ stock }) => {
  const [counter, setCounter] = useState(1);

  const addOne = () => {
    if (counter < stock) {
      setCounter(counter + 1);
    } else {
      alert("Stock máximo");
    }
  };

  const subOne = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    } else {
      alert("No puede ser inferior a 1");
    }
  };

  return <ItemCount counter={counter} addOne={addOne} subOne={subOne} />;
};

export default ItemCountContainer;