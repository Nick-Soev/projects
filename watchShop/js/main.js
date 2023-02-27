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
  const close = menu.querySelector("._menuClose");
  const bg = document.querySelector("._bg");
  if (burger) {
    burger.addEventListener("click", function (e) {
      menu.classList.add("_active");
      bg.classList.add("_active");
      if (menu.classList.contains("_active")) {
        bodyLockAdd();
      } else {
        bodyLockRemove();
      }
    });
    function menu_close() {
      menu.classList.remove("_active");
      bg.classList.remove("_active");
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
    bg.addEventListener("click", function () {
      if (this.classList.contains('_active')) {
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
  const goodsSlider = document.querySelector("#goodsSlider");
  const descSlider = document.querySelector("#descSlider");

  if (goodsSlider) {
    var firS = new Glide("#goodsSlider", {
      type: 'carousel',
      animationDuration: 1000,
      focusAt: "center",
      perView: 3,
      startAt: 1,
      breakpoints: {
        1024: {
          perView: 2
        },
        660: {
          perView: 1
        }
      },

    });
    firS.mount();
  }
  if (descSlider) {
    var secS = new Glide("#descSlider", {
      rewind: false,
    });
    secS.mount();
  }

  const arrowsS = descSlider.querySelectorAll('.glide__arrow');
  const slideS = descSlider.querySelectorAll('.glide__slide');
  if (arrowsS.length > 0) {
    function count() {
      let c = 0;
      slideS.forEach((i, ind) => {
        if (i.classList.contains('glide__slide--active')) c = ind + 1
      })
      return c;
    }
    arrowsS.forEach(i => {
      i.addEventListener('click', () => {
        setTimeout(() => {
          descSlider.querySelector('.descSlider__count').textContent = `0${count()}`;
        }, 500)
      })

    })
  }

};
slidersGlideInit();