"use strict";

//                       убирает скачек скролла
function bodyLockAdd() {
  const body = document.querySelector(".body");
  let paddingOffset = window.innerWidth - body.offsetWidth + "px";
  body.style.paddingRight = paddingOffset;
  body.classList.add("_lock");
  const fixElem = document.querySelectorAll("._fix-elem");
  for (let i = 0; i < fixElem.length; i++) {
    let elem = fixElem[i];
    elem.style.paddingRight = paddingOffset;
  }
}
function bodyLockRemove() {
  const body = document.querySelector(".body");
  body.style.paddingRight = "0px";
  body.classList.remove("_lock");
  const fixElem = document.querySelectorAll("._fix-elem");
  for (let i = 0; i < fixElem.length; i++) {
    let elem = fixElem[i];
    elem.style.paddingRight = "0px";
  }
}

//                             menu burger
const menuBurgerInit = function () {
  const burger = document.querySelector("._burger");
  const menu = document.querySelector("._menu");
  const close = document.querySelector("._menuClose");
  if (burger) {
    burger.addEventListener("click", function (e) {
      menu.classList.add("_active");
      if (menu.classList.contains("_active")) {
        bodyLockAdd();
      } else {
        bodyLockRemove();
      }
    });

    function menu_close() {
      menu.classList.remove("_active");
      bodyLockRemove();
    }
    // Закрыть меню при клике на крестик
    close.addEventListener("click", menu_close);
    // Закрыть меню при клике на ссылку
    menu.addEventListener("click", function (e) {
      if (e.target.matches("a")) {
        menu_close();
      }
    });
    // Закрыть меню при клике на клавишу 'Esc'
    document.addEventListener("keydown", function (e) {
      if (e.code === "Escape") {
        if (menu.classList.contains("_active")) {
          menu_close();
        }
      }
    });
  }
};
menuBurgerInit();

//                            sliders  init
const slidersGlideInit = () => {
  const descSliderFir = document.querySelector("#descSliderFir");
  const descSliderSec = document.querySelector("#descSliderSec");
  const descSliderThi = document.querySelector("#descSliderThi");
  const constrSlider = document.querySelector("#constrSlider");

  if (descSliderFir) {
    var firS = new Glide("#descSliderFir", {
      animationDuration: 1000,
      focusAt: "center",
    });
    firS.mount();
  }
  if (descSliderSec) {
    var secS = new Glide("#descSliderSec", {
      rewind: false,
      focusAt: "center",
    });
    secS.mount();
  }
  if (descSliderThi) {
    var thiS = new Glide("#descSliderThi", {
      type: "carousel",
      focusAt: "center",
    });
    thiS.mount();
  }
  if (constrSlider) {
    var constrS = new Glide("#constrSlider", {
      // type: "carousel",
      focusAt: "center",
    });
    constrS.mount();
  }
};
slidersGlideInit();

//                                form
const formConstructorInit = () => {
  const formConstr = document.getElementById("constrForm");
  if (formConstr) {
    const range = document.getElementById("inputRange");
    range.addEventListener("input", () => {
      if (range.value.length === 1) {
        document.querySelector(
          "._constrLength"
        ).textContent = `${range.value}.0 м`;
      } else {
        document.querySelector(
          "._constrLength"
        ).textContent = `${range.value} м`;
      }
    });
    formConstr.addEventListener("submit", (e) => {
      e.preventDefault();
    });
  }
};
formConstructorInit();
