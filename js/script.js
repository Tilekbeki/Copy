//меню анимация
function addMenuAnimation(selector) {
    let obj = document.querySelector(selector);
    obj.classList.add("show");
    obj.style.display = 'block';
    obj.style.opacity = '1';
  }
  
  function removeMenuAnimation(selector) {
    let obj = document.querySelector(selector);
    obj.classList.remove("show");
    obj.style.display = 'none';
  }

  function handleScrollForMenu() {
    let prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
      let currentScrollPos = window.pageYOffset;
      if (prevScrollpos < currentScrollPos) {
        addMenuAnimation('.menu-top');
        addMenuAnimation('.back-to-top');
      } else {
        removeMenuAnimation('.menu-top');
        removeMenuAnimation('.back-to-top');
      }
      prevScrollpos = currentScrollPos;
    }
  }
  
  function handleScrollForMenu() {
    window.addEventListener('scroll', ()=>{
      if (window.pageYOffset>=100) {
        addMenuAnimation('.menu-top');
        addMenuAnimation('.back-to-top');
      } else {
        removeMenuAnimation('.menu-top');
        removeMenuAnimation('.back-to-top');
      }
    })
  }

  handleScrollForMenu();

// //код для бургер меню
const smallmenu = document.querySelector('.menu-small');
const hamburgerBox = document.querySelector('.hamburger-box');
const hamburger = document.querySelector('.hamburger--spring');
function showBurgerMenu(){
    hamburgerBox.classList.toggle('open');
    smallmenu.classList.toggle('open');
    hamburger.classList.toggle('is-active');
}

function clicked(){
    hamburgerBox.addEventListener('click',()=>{
        showBurgerMenu();
    })
}
clicked();
