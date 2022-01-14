$(window).on('scroll', function () {
	if ($(window).scrollTop()) {
		$('.navbar').addClass('blackto');
	} else {
		$('.navbar').removeClass('blackto');
	}
})
$(document).ready(function () {
	$('.navbar-nav>li>a:not(.dropdown-toggle)').on('click', function () {
		$('.navbar-collapse').collapse('hide');
	});
});

$(document).ready((function () {
	$('#toggleMenu').click(function (e) {
		e.stopPropagation();
		$('.menu-navbar').toggleClass('opened');
		$('#toggleMenu').toggleClass('opened');
	});

	$('body,html').click(function (e) {
		$('.menu-navbar').removeClass('opened');
		$('#toggleMenu').removeClass('opened');
	});

	// $('.menu-navbar').click(function (e) {
	// 	e.stopPropagation();
	// });

	var swiper = new Swiper(".mySwiper", {
		effect: "cards",
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		grabCursor: true
	});
}));


const roadMapSec = document.querySelectorAll('.aboutus-container');

const options = {
	root: null,
	threshold: 0,
	rootMargin: '-130px'
}
const observer = new IntersectionObserver(function (entries, observer) {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			entry.target.classList.add('anim');
		} else if (entry.boundingClientRect.top > 12) {
			entry.target.classList.remove('anim');
		}
		// console.log(entry.target);
		// entry.target.classList.toggle('anim');
		// observer.unobserve(entry.target);
	})
}, options);
// observer.observe(roadMapSec);
roadMapSec.forEach(section => {
	observer.observe(section);
})


window.sr = ScrollReveal();

sr.reveal('.home-img1', {
	duration: 1000,
	origin: 'bottom',
	distance: '110px',
	opacity: 0.1,
	delay: 0,
	easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
	rotate: { x: 0, y: -10, z: -1 },
});

sr.reveal('.home-img2', {
	duration: 2000,
	origin: 'bottom',
	distance: '50px',
	delay: 100,
	opacity: 0,
});

sr.reveal('.aboutus-image-box', {
	duration: 2000,
	origin: 'left',
	distance: '100px',
	delay: 100,
	opacity: 0,
	// scale: 0.6
});

// sr.reveal('.sr-bx2', {
// 	duration: 2000,
// 	origin: 'bottom',
// 	// distance: '100px',
// 	delay: 200,
// 	opacity: 0,
//     scale: 0.6
// });

// sr.reveal('.sr-bx3', {
// 	duration: 2000,
// 	origin: 'bottom',
// 	// distance: '100px',
// 	delay: 300,
// 	opacity: 0,
//     scale: 0.6
// });

// sr.reveal('.sr-bx4', {
// 	duration: 2000,
// 	origin: 'bottom',
// 	// distance: '100px',
// 	delay: 400,
// 	opacity: 0,
//     scale: 0.6
// });


sr.reveal('.title', {
	duration: 1500,
	origin: 'bottom',
	distance: '70px',
	viewFactor: 0.01,
	delay: 0,
	opacity: 0.1,
	easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
});


// sr.reveal('.about-main-title', {
// 	duration: 1900,
// 	origin: 'bottom',
// 	distance: '40px',
// 	viewFactor: 0.01,
// 	delay: 100,
// 	opacity: 0.3,
// 	easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
// });


sr.reveal('.content', {
	duration: 1900,
	origin: 'bottom',
	distance: '40px',
	viewFactor: 0.01,
	delay: 200,
	opacity: 0.1,
	easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
});

sr.reveal('.about-btn', {
	duration: 1900,
	origin: 'bottom',
	distance: '70px',
	viewFactor: 0.01,
	delay: 100,
	opacity: 0.6,
	easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
});

sr.reveal('.mission-box', {
	duration: 1900,
	viewFactor: 0.01,
	origin: 'bottom',
	distance: '70px',
	opacity: 0.1,
	delay: 100,
	easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
	// rotate: { x: 90, y: 0, z: 0 },
});
sr.reveal('.buy-box', {
	duration: 1900,
	viewFactor: 0.01,
	origin: 'bottom',
	distance: '70px',
	opacity: 0.1,
	delay: 100,
	easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
	// rotate: { x: 90, y: 0, z: 0 },
});

sr.reveal('.launchpad-box', {
	duration: 1900,
	viewFactor: 0.02,
	origin: 'bottom',
	distance: '70px',
	opacity: 0.1,
	delay: 100,
	easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
	// rotate: { x: 90, y: 0, z: 0 },
});
sr.reveal('.subscribe-logo', {
	duration: 1900,
	viewFactor: 0.02,
	origin: 'bottom',
	distance: '70px',
	opacity: 0.1,
	delay: 100,
	easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
	// rotate: { x: 90, y: 0, z: 0 },
});
sr.reveal('.subscribe-form', {
	duration: 1900,
	viewFactor: 0.02,
	origin: 'bottom',
	distance: '70px',
	opacity: 0.1,
	delay: 100,
	easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
	// rotate: { x: 90, y: 0, z: 0 },
});
// sr.reveal('.sr-tm3', {
// 	duration: 1900,
// 	viewFactor: 0.02,
// 	origin: 'bottom',
// 	distance: '70px',
// 	opacity: 0.1,
// 	delay: 200,
// 	easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
// 	rotate: { x: 90, y: 0, z: 0 },
// });
// sr.reveal('.sr-tm4', {
// 	duration: 1900,
// 	viewFactor: 0.02,
// 	origin: 'bottom',
// 	distance: '70px',
// 	opacity: 0.1,
// 	delay: 300,
// 	easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
// 	rotate: { x: 90, y: 0, z: 0 },
// });
// sr.reveal('.sr-tm5', {
// 	duration: 1900,
// 	viewFactor: 0.02,
// 	origin: 'bottom',
// 	distance: '70px',
// 	opacity: 0.1,
// 	delay: 400,
// 	easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
// 	rotate: { x: 90, y: 0, z: 0 },
// });
