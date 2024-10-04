export default {
  routes: [
    {
      method: "GET",
      path: "/allCoursesCount",
      handler: "api::category.category.countAllCourses",
      config: {
        auth: false,
      },
    },
  ],
};
