import Logo from "./extensions/logo.svg";
export default {
  config: {
    auth: {
      logo: Logo,
    },
    menu: { logo: Logo },
    locales: ["uk", "ru"],
    tutorials: false,
    notifications: { releases: false },
  },
  bootstrap() {},
};
