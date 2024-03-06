import ItemCountContainer from "../../common/itemCount/ItemCountContainer";
import "./ItemDetail.css"

const ItemDetail = ({ item }) => {
  return (
    <div>
      <div className={"containerItemDetail"}>
        <div className={"containerImage"}>
          <img src={item.img} alt="" />
        </div>
        <div className={"containerDetail"}>
          <h2 style={{ fontFamily: "monospace" }}>
            <span style={{ fontSize: "25px" }}>Nombre:</span>{" "}
            {item.title}
          </h2>
          <h2 style={{ fontFamily: "monospace" }}>
            <span style={{ fontSize: "25px" }}>Descripcion:</span>{" "}
            {item.description}
          </h2>
          <h2 style={{ fontFamily: "monospace" }}>
            <span style={{ fontSize: "25px" }}>Precio:</span> $
            {item.price}.-
          </h2>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
          <ItemCountContainer 
            stock={item.stock}
          />
        </div>
      </div>
  );
};

export default ItemDetail;