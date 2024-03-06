import ProductCard from "../../common/ProductCard";
import "./ItemList.css"

const ItemList = ({ products }) => {
  return (
    <div className="cardsContainer">
      {products.map(({id, img, title, description, price}) => {
        return (
          <ProductCard
            key={id}
            img={img}
            title={title}
            description={description}
            price={price}
            id={id}
          />
        );
      })}
    </div>
  );
};

export default ItemList;