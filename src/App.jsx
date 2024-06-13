import "./App.css";
import Header from "./components/Header";
import { CartState } from "./context/Context";

function App() {
  const { state } = CartState();
  console.log(state);

  return (
    <>
      <Header />
    </>
  );
}

export default App;
