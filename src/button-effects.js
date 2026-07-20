import { updateTab } from "./index.js";
import { homePage } from "./tabs/home.js";
import { menuPage } from "./tabs/menu.js";
import { aboutPage } from "./tabs/about.js";

export var waveBtn = (function () {
  "use strict";
  var btn = document.querySelectorAll(".wave"),
    tab = document.querySelector(".tab-bar"),
    indicator = document.querySelector(".indicator"),
    indicatorIndex = 0;
  indicator.style.marginLeft = indicatorIndex + "px";

  for (let i = 0; i < btn.length; i++) {
    btn[i].onmousedown = function (e) {
      switch(this.dataset.num) {
        case "1":
          updateTab(homePage);
          break;
        case "2":
          updateTab(menuPage);
          break;
        case "3":
          updateTab(aboutPage);
          break;
      }

      var newRound = document.createElement("div"),
        x,
        y;

      newRound.className = "circle";
      this.appendChild(newRound);

      x = e.pageX - this.offsetLeft;
      y = e.pageY - this.offsetTop;

      newRound.style.left = x + "px";
      newRound.style.right = y + "px";
      newRound.className += " anim";

      indicator.style.marginLeft =
        indicatorIndex + (this.dataset.num - 1) * 150 + "px";

      setTimeout(function () {
        newRound.remove();
      }, 1200);
    };
  }
})();
