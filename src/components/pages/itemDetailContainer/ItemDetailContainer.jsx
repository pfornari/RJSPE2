import { useEffect, useState } from "react";
import { getProduct } from "../../../data";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getProduct(+id).then((resp) => {
      setItem(resp);
      setIsLoading(false);
    });
    
  }, [id]);

  return (
    <>
      {isLoading ? (
        <h2>Cargando producto...</h2>
      ) : (
        <ItemDetail item={item} />
      )}
    </>
  );
};

export default ItemDetailContainer;