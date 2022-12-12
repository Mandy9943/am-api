module.exports = {
  routes: [
    {
      // Path defined with a URL parameter
      method: "GET",
      path: "/categories/count",
      handler: "category.count",
    },
  ],
};
