"use strict";

/**
 * category controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::category.category", {
  count(ctx) {
    var { query } = ctx.request;
    return strapi.entityService.count("api::category.category", query);
  },
});
