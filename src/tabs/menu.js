import menuData from "../menu-items.json";

const appetizers = menuData.appetizers.map(
  (item) => `${item.name} - ${item.price}`,
);
const mainCourses = menuData["main-courses"].map(
  (item) => `${item.name} - ${item.price}`,
);
const drinks = menuData.drinks.map((item) => `${item.name} - ${item.price}`);

export const menuPage = document.createElement("div");
menuPage.classList.add("page-tab");

const titleContainer = document.createElement("div");
titleContainer.classList.add("container");
const appetizersContainer = document.createElement("div");
appetizersContainer.classList.add("container");
const mainCoursesContainer = document.createElement("div");
mainCoursesContainer.classList.add("container");
const drinksContainer = document.createElement("div");
drinksContainer.classList.add("container");

const titleHeader = document.createElement("h1");
titleHeader.classList.add("title");
titleHeader.innerText = "Menu";
titleContainer.append(titleHeader);

const appetizersHeader = document.createElement("h1");
appetizersHeader.classList.add("title");
appetizersHeader.innerText = "Appetizers";
appetizersContainer.append(appetizersHeader);

appetizers.forEach(element => {
  const item = document.createElement("div");
  item.innerText = `${element}`;
  appetizersContainer.append(item);
});

const mainCoursesHeader = document.createElement("h1");
mainCoursesHeader.classList.add("title");
mainCoursesHeader.innerText = "Main Courses";
mainCoursesContainer.append(mainCoursesHeader);

mainCourses.forEach(element => {
  const item = document.createElement("div");
  item.innerText = `${element}`;
  mainCoursesContainer.append(item);
});

const drinksHeader = document.createElement("h1");
drinksHeader.classList.add("title");
drinksHeader.innerText = "Drinks";
drinksContainer.append(drinksHeader);

drinks.forEach(element => {
  const item = document.createElement("div");
  item.innerText = `${element}`;
  drinksContainer.append(item);
});

menuPage.append(titleContainer);
menuPage.append(appetizersContainer);
menuPage.append(mainCoursesContainer);
menuPage.append(drinksContainer);