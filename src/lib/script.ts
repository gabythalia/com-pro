//NAVBARRR FIXED
window.onscroll = function() {
    const header = document.querySelector('header') as HTMLElement | null;
  
    if (header) {
      const fixedNav = header.offsetTop;
  
      if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
      } else {
        header.classList.remove('navbar-fixed');
      }
    }
  };
  

//HAMBURGER PART !!
const hamburger: HTMLElement | null = document.querySelector('#hamburger');
const navMenu = document.querySelector("#nav-menu")
if (hamburger) {

  
  hamburger.addEventListener('click', function() {

    console.log('')

    //aktifin button nya
    hamburger.classList.toggle('hamburger-active');
    //non-aktifin button nya
    navMenu?.classList.toggle('hidden')
  });
}
