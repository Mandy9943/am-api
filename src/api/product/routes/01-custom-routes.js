module.exports = {
  routes: [
    {
      // Path defined with a URL parameter
      method: "GET",
      path: "/products/count",
      handler: "product.count",
    },
  ],
};
