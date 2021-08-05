const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

const word = new Word(element, options);

options: {
	shapesOnTop: false, // shapes on top or beneath the letters
	totalShapes: 10, // number shapes per letter
	shapeTypes: ['circle', 'rect', 'polygon'], // type of shapes
	shapeColors: ['#e07272', '#0805b5', '#49c6ff', '#8bc34a', '#1e1e21'], // pick randomly from these colors
	shapeFill: true, // if set to false, there's no fill and the stroke gets applied instead
	shapeStrokeWidth: 1 // the stroke width
}



word.show({
	lettersAnimationOpts: {
		duration: 400,
		delay: (t,i) => i*60,
		easing: 'easeInExpo',
		opacity: [0,1],
		scale: [0,1]
	},
	shapesAnimationOpts: {
		duration: 700,
		delay: (t,i) => i*40,
		easing: 'easeOutExpo',
		translateX: () => [0,anime.random(-20,20)],
		translateY: () => [0,anime.random(-400,400)],
		scale: () => [randomBetween(0.2,0.6),randomBetween(0.2,0.6)],  
		rotate: () => [0,anime.random(-16,16)],
		opacity: [
			{value: 1, duration: 1, easing: 'linear'}, 
			{value: 0, duration: 700, easing: 'easeOutQuad'}
		]
	}
})

/*// Get the container element
var btnContainer = document.getElementById("navbar");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("nav-item");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}*/

//form
