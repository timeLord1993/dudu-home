// 白名单页
const WHITE_PAGES = ["/home"];
export default defineNuxtRouteMiddleware(to => {
  if (WHITE_PAGES.includes(to.path)) {
    return navigateTo(to.path);
  }
  return navigateTo("/login");
});
