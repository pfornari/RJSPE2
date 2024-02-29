import { Button } from "@mui/material";

const ItemCount = ({ counter, addOne, subOne }) => {
  return (
    <>
      <div style={{ marginBottom: "20px", display: "flex", gap: "30px" }}>
        <Button variant="contained" onClick={addOne}>
          Agregar
        </Button>
        <h2> {counter} </h2>
        <Button
          variant="contained"
          onClick={subOne}
          disabled={counter === 1 ? true : false}
        >
          Sacar
        </Button>
        <Button variant="outlined">Agregar al carrito</Button>
      </div>
    </>
  );
};

export default ItemCount;