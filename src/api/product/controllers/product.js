"use strict";

/**
 * product controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::product.product", {
  count(ctx) {
    var { query } = ctx.request;
    return strapi.query("api::product.product").count({ where: query });
  },
});
