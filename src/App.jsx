import { useSelector } from "react-redux";
import Header from "./components/Header";
import Cart from "./components/Cart";
import { Product } from "./components/Product";

export default function App() {
  const { isOpenCart } = useSelector((state) => state.fruites);
  return (
    <div>
      <Header />

      {isOpenCart && <Cart />}
      <Product />
    </div>
  );
}
