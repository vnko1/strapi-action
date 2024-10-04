export function getParams<T extends object>(
  defaultPopulateParams: T,
  pagination = false
) {
  const ctx = strapi.requestContext.get();

  return {
    ...ctx.query,
    ...(pagination ? ctx.query.pagination : {}),
    populate: ctx.query.populate ? ctx.query.populate : defaultPopulateParams,
  };
}
