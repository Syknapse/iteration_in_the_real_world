const codeSnippets = {
  ALL: {
    code: "",
    description: "// Show all products",
  },
  FILTER: {
    type: "array.filter()",
    code: 'products.filter( (product) => product.market === "Great Mall")',
    description: "// Show only products from the Great Mall",
    href: {
      github:
        "https://github.com/Syknapse/iteration_in_the_real_world/blob/main/src/components/ProductList/ProductList.jsx#L16",
      article: "https://cult.honeypot.io/contributors/syk-houdeib",
    },
  },
};
export default codeSnippets;
