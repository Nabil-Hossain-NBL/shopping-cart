import "./App.css";
import Header from "./components/Header";
import SingleProduct from "./components/SingleProduct";
import { CartState } from "./context/Context";

function App() {
  const {
    state: { products },
  } = CartState();
  console.log(products);

  return (
    <>
      <Header />
      <div className=" flex flex-wrap gap-4 justify-center">
        {products.map((item, index) => (
          <SingleProduct item={item} key={index} />
        ))}
      </div>
    </>
  );
}

export default App;
