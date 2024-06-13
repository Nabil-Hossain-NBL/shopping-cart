import "./App.css";
import Header from "./components/Header";
import SingleProduct from "./components/SingleProduct";
import { CartState } from "./context/Context";

function App() {
  const {
    state: { products },
    productState: { searchQuery },
  } = CartState();
  console.log(products);

  const transformProducts = () => {
    let sortedProducts = products;

    if (searchQuery) {
      sortedProducts = sortedProducts.filter((prod) =>
        prod.name.toLowerCase().includes(searchQuery)
      );
    }

    return sortedProducts;
  };

  return (
    <>
      <Header />
      <div className=" flex flex-wrap gap-4 justify-center">
        {transformProducts().map((item, index) => (
          <SingleProduct item={item} key={index} />
        ))}
      </div>
    </>
  );
}

export default App;
