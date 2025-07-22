import { initApp } from "./app/init.js";
import { initRouter } from "./app/router.js";
import { initTheme } from "./utils/theme.js";
import { initScrollAnimations } from "./utils/animations.js";

document.addEventListener("DOMContentLoaded", () => {
  initApp();
  initRouter();
  initTheme();
  initScrollAnimations();
});
