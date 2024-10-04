/**
 * lecturer controller
 */

import { factories } from "@strapi/strapi";
import { getParams } from "../../../utils";

const uid = "api::lecturer.lecturer";
const defaultPopulateOptions = {
  photo: { fields: ["url"] },
  coursesCurator: { fields: ["title"] },
  coursesLecturer: { fields: ["title"] },
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
