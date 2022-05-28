const MENUBTN = document.querySelector('.menu-btn');
const NAVMENU = document.querySelector('.nav-menu');
MENUBTN.addEventListener('click', () => {
    NAVMENU.classList.toggle('nav-menu_visible');
    MENUBTN.classList.toggle('open');
});


const MENULINKS = document.querySelectorAll('.nav-menu a[href^="#"]');

MENULINKS.forEach(MENULINK => {
  MENULINK.addEventListener('click', function() {
    NAVMENU.classList.remove('nav-menu_visible');
    MENUBTN.classList.toggle('open');
  })
})