import { homePage } from "./tabs/home.js";

export function pageLoad(contentContainer, currentTab) {
  contentContainer.append(homePage);
}
