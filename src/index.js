import { pageLoad } from "./page-load.js";
import { waveBtn } from "./button-effects.js";
import { homePage } from "./tabs/home.js";
import { menuPage } from "./tabs/menu.js";
import { aboutPage } from "./tabs/about.js";
import "./stylesheet.css";

let currentTab = homePage;

export function updateTab(tab) {
    currentTab = tab;
    pageLoad(contentContainer, tab);
}

const contentContainer = document.getElementById("content");
pageLoad(contentContainer, currentTab);