import "./App.css";
import products from "./Api/products";
import ProductList from "./components/ProductList/ProductList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>JavaScript iteration in the real world</h1>
      </header>
      <ProductList products={products} />
    </div>
  );
}

export default App;
