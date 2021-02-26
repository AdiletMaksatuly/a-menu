(() => {
  const init = (menu, menuList, menuItems, menuBurger) => {
    menuItems.forEach(elem => {
      elem.classList.add('amenu__item');
      menuBurger.classList.add('amenu__burger');

      createBurgerMenu(menuBurger);
    });

  }

  const createBurgerMenu = (menuBurger) => {
    const burgerBtn = document.createElement('button');
    const menuBtn = document.createElement('')
  }

  window.amenu = (selectorMenu, selectorMenuList, selectorMenuItems, selectorMenuBurger) => {
    const menu = document.querySelector(selectorMenu),
      menuList = document.querySelector(selectorMenuList),
      menuItems = document.querySelectorAll(selectorMenuItems),
      menuBurger = document.querySelector(selectorMenuBurger);
    init(menu, menuList, menuItems, menuBurger);
  }
})();