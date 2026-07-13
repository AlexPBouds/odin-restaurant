import menuData from "./menu-items.json";

const appetizers = menuData.appetizers.map(
  (item) => `${item.name} - ${item.price}`,
);
const mainCourses = menuData["main-courses"].map(
  (item) => `${item.name} - ${item.price}`,
);
const drinks = menuData.drinks.map((item) => `${item.name} - ${item.price}`);
