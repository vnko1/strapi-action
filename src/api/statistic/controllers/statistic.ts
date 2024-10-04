/**
 * statistic controller
 */

import { factories } from "@strapi/strapi";
import { getParams } from "../../../utils";
const uid = "api::statistic.statistic";
export default factories.createCoreController(uid, ({ strapi }) => ({
  async find(ctx) {
    await this.validateQuery(ctx);

    return await strapi.entityService.findMany(uid, getParams({}));
  },
}));
