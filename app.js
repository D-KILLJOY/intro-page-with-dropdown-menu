const navLogo = document.querySelector(".menu-con");
const navOpen = document.querySelector(".menu-open");
const navClose = document.querySelector(".menu-close");
const navList = document.querySelector(".nav-list");
const featMenu = document.querySelector(".feat-li");
const compMenu = document.querySelector(".comp-li");
const features = document.querySelector(".features");
const company = document.querySelector(".company");

navLogo.addEventListener("click", () => {
	let openNav = navOpen.classList.contains("hidden");
	let navShow = navList.classList.contains("nav-list-show");

	if (openNav) {
		navOpen.classList.remove("hidden");
		navClose.classList.add("hidden");
		navList.classList.remove("nav-list-show");
	} else {
		navOpen.classList.add("hidden");
		navClose.classList.remove("hidden");
		navList.classList.add("nav-list-show");
	}
});

features.addEventListener("click", () => {
	let hidden = featMenu.classList.contains("feat-li-hidden");
	const arwUp = document.querySelector(".feat-arrow-up");
	const arwDwn = document.querySelector(".feat-arrow-dwn");

	if (hidden) {
		featMenu.classList.remove("feat-li-hidden");
		arwUp.classList.add("arrow-hidden");
		arwDwn.classList.remove("arrow-hidden");
	} else {
		featMenu.classList.add("feat-li-hidden");
		arwUp.classList.remove("arrow-hidden");
		arwDwn.classList.add("arrow-hidden");
	}
});

company.addEventListener("click", () => {
	let hidden = compMenu.classList.contains("comp-li-hidden");
	const arwUp = document.querySelector(".comp-arrow-up");
	const arwDwn = document.querySelector(".comp-arrow-dwn");

	if (hidden) {
		compMenu.classList.remove("comp-li-hidden");
		arwUp.classList.remove("arrow-hidden");
		arwDwn.classList.add("arrow-hidden");
	} else {
		compMenu.classList.add("comp-li-hidden");
		arwUp.classList.add("arrow-hidden");
		arwDwn.classList.remove("arrow-hidden");
	}
});
