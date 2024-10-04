/**
 * category controller
 */

import { factories } from "@strapi/strapi";
import { getParams } from "../../../utils";

const uid = "api::category.category";
const courseUid = "api::course.course";

const defaultCategoriesPopulateOptions = {
  courses: { fields: ["title"], sort: { id: "asc" } },
};
const defaultCategoryPopulateOptions = { courses: { sort: { id: "asc" } } };

export default factories.createCoreController(uid, ({ strapi }) => ({
  async find(ctx) {
    await this.validateQuery(ctx);
    const { pagination, results } = await strapi.entityService.findPage(
      uid,
      getParams(defaultCategoriesPopulateOptions, true)
    );
    const promises = [
      ...results.map(async (item) => {
        const coursesCount = await strapi.db.query(courseUid).count({
          where: { category: { category: { $contains: item.category } } },
        });

        return { ...item, coursesCount };
      }),
    ];
    const updatedResults = await Promise.all(promises);

    return { results: updatedResults, pagination };
  },

  async findOne(ctx) {
    await this.validateQuery(ctx);
    const category = await strapi.entityService.findOne(
      uid,
      ctx.params.id,
      getParams(defaultCategoryPopulateOptions)
    );

    if (category) {
      const coursesCount = await strapi.db.query(courseUid).count({
        where: { category: { category: { $contains: category.category } } },
      });

      category["coursesCount"] = coursesCount;
    }

    return category;
  },

  async countAllCourses(ctx) {
    return await strapi.db.query(courseUid).count();
  },
}));
