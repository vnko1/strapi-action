/**
 * article controller
 */

import { factories } from "@strapi/strapi";
import { getParams } from "../../../utils";

const uid = "api::article.article";
const defaultPopulateOptions = {
  mainBanner: { fields: ["url"] },
  cardBanner: { fields: ["url"] },
  author: {
    populate: {
      photo: { fields: ["url"] },
      authorLecturer: { populate: { photo: { fields: ["url"] } } },
    },
  },
  categories: { fields: ["category"] },
  courses: { sort: { id: "asc" } },
  similarArticles: {
    populate: {
      mainBanner: { fields: ["url"] },
      cardBanner: { fields: ["url"] },
    },
  },
};

export default factories.createCoreController(uid, ({ strapi }) => ({
  async find(ctx) {
    await this.validateQuery(ctx);
    return await strapi.entityService.findPage(
      uid,
      getParams(defaultPopulateOptions, true)
    );
  },

  async findOne(ctx) {
    await this.validateQuery(ctx);

    return await strapi.entityService.findOne(
      uid,
      ctx.params.id,
      getParams(defaultPopulateOptions)
    );
  },
}));
