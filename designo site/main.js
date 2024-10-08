// $('.menu_btn').on('click', function() {
//     $('.header-menu').toggleClass('header-menu_active');
// });

// document.addEventListener('DOMContentLoaded', function () {
  
//     // Select the elements
//     const menuBtn = document.querySelector('.menu_btn');
//     const menu = document.querySelector('.header-menu');
    
//     // Event listener for the menu button click
//     menuBtn.addEventListener('click', function () {
//       // Toggle the active class on the button to change its appearance
//       menuBtn.classList.toggle('active');
      
//       // Toggle the active class on the menu to slide it in and out
//       menu.classList.toggle('header-menu_active');
//     });
    
//   });

document.addEventListener('DOMContentLoaded', function () {

    // Select the elements
    const menuBtn = document.querySelector('.menu_btn');
    const menu = document.querySelector('.header-menu');
    const hero = document.querySelector('.hero');
    const body = document.querySelector('body');
    const main = document.querySelector('.main');
    const cover = document.querySelector('.touch');

    // Event listener for the menu button click
    menuBtn.addEventListener('click', function () {
        // Toggle the active class on the burger button to change its appearance
        menuBtn.classList.toggle('active');
        
        // Toggle the active class on the menu to show/hide it
        menu.classList.toggle('header-menu_active');
        
        // Toggle the active class on the main content to change its background color
        
        // Toggle the active class on the body to apply the veil background color
        hero.classList.toggle('active');

        body.classList.toggle('active');
        main.classList.toggle('active');
        cover.classList.toggle('active');
    });

});

