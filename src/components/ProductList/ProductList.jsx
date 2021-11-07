import { useState } from "react";
import "./productList.css";
import codeSnippets from "./codeSnippets";

const ProductList = ({ products }) => {
  console.log("products: ", products);
  const [displayProducts, setDisplayProducts] = useState(products);
  const [snippet, setSnippet] = useState(codeSnippets["ALL"]);

  const handleDisplayAll = () => {
    setDisplayProducts(products);
    setSnippet(codeSnippets["ALL"]);
  };

  const handleFilter = () => {
    const filteredProducts = products.filter(
      (product) => product.market === "awesomo market"
    );
    setDisplayProducts(filteredProducts);
    setSnippet(codeSnippets["FILTER"]);
  };

  console.log("----> displayProducts: ", displayProducts);

  return (
    <div className="root">
      <div className="buttons-container">
        <button onClick={() => handleDisplayAll()}>Show All</button>
        <button onClick={() => handleFilter()}>filter()</button>
      </div>
      <div className="info-container">
        {snippet.description && <p>{snippet.description}</p>}
        {snippet.code && <code>{snippet.code}</code>}
        {snippet.href && (
          <div className="links">
            <a href={snippet.href.github} target="_blank" rel="noreferrer">
              link to line in github
            </a>
            <a href={snippet.href.article} target="_blank" rel="noreferrer">
              link to article
            </a>
          </div>
        )}
      </div>
      <div className={"cards-container"}>
        {displayProducts.map((product) => (
          <div key={product.name} className={"card"}>
            <h3>{product.name}</h3>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
