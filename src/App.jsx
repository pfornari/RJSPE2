import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";
import Layout from "./components/layout/Layout"
import CartContainer from "./components/pages/cart/CartContainer";
import ItemDetailContainer from "./components/pages/itemDetailContainer/ItemDetailContainer"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:category" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<CartContainer />} />
          <Route path="*" element={<h1>No Existe</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;