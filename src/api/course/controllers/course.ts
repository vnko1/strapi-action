/**
 * course controller
 */

import { factories } from "@strapi/strapi";
import { getParams } from "../../../utils";

const uid = "api::course.course";
const defaultPopulateOptions = {
  heroBanner1: { fields: ["url"] },
  heroBanner2: { fields: ["url"] },
  cardBanner: { fields: ["url"] },
  tariffs: true,
  video: { fields: ["link"], populate: { image: { fields: ["url"] } } },
  isPremiumCourse: { populate: { mainBanner: { fields: ["url"] } } },
  curator: { populate: { photo: { fields: ["url"] } } },
  lecturers: { sort: { id: "asc" }, populate: { photo: { fields: ["url"] } } },
  category: { fields: ["category"] },
  similarCourses: true,
  learningAdvantage: {
    fields: ["id"],
    populate: {
      advantages: {
        fields: ["title", "description"],
        sort: { id: "asc" },
        populate: { photo: { fields: ["url"] } },
      },
    },
  },
  faq: true,
  targets: {
    fields: ["name", "description"],
    sort: { id: "asc" },
    populate: { image: { fields: ["url"] } },
  },
  courseProgram: {
    populate: { lessons: { sort: { id: "asc" } } },
    sort: { id: "asc" },
  },
  reviews: {
    fields: ["text", "name", "description", "type"],
    populate: { photo: { fields: ["url"] } },
    sort: { id: "asc" },
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
