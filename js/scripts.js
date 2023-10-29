/*!
* Start Bootstrap - Agency v7.0.10 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    const modal1 = document.getElementById('portfolioModal1');
    modal1.addEventListener('show.bs.modal', event => {
        document.getElementById('frame-youtube').setAttribute('src', 'https://www.youtube.com/embed/aFJvQR4_YPU?si=_yiVxmMtW-nKpmBT');
    });
    modal1.addEventListener('hidden.bs.modal', event => {
        document.getElementById('frame-youtube').setAttribute('src', '');
    });

    const modal2 = document.getElementById('portfolioModal2');
    modal2.addEventListener('show.bs.modal', event => {
        document.getElementById('frame-youtube2').setAttribute('src', 'https://www.youtube.com/embed/YNVGJEERHMw?si=qoEdh3ZOKOtdLr2f');
    });
    modal2.addEventListener('hidden.bs.modal', event => {
        document.getElementById('frame-youtube2').setAttribute('src', '');
    });

    const modal3 = document.getElementById('portfolioModal3');
    modal3.addEventListener('show.bs.modal', event => {
        document.getElementById('frame-youtube3').setAttribute('src', 'https://www.youtube.com/embed/anQIHgcoIH0?si=CAKRS6PhkcCSAbOl');
    });
    modal3.addEventListener('hidden.bs.modal', event => {
        document.getElementById('frame-youtube3').setAttribute('src', '');
    });

    const modal4 = document.getElementById('portfolioModal4');
    modal4.addEventListener('show.bs.modal', event => {
        document.getElementById('frame-youtube4').setAttribute('src', 'https://www.youtube.com/embed/Xr5DtJuwOVI?si=LJc2z1nCRDPj1RU_');
    });
    modal4.addEventListener('hidden.bs.modal', event => {
        document.getElementById('frame-youtube4').setAttribute('src', '');
    });

    
});

