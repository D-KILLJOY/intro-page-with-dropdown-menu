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
	let featHidden = featMenu.classList.contains("feat-li-hidden");
	const featArwUp = document.querySelector(".feat-arrow-up");
	const featArwDwn = document.querySelector(".feat-arrow-dwn");

	let compHidden = compMenu.classList.contains("comp-li-hidden");
	const compArwUp = document.querySelector(".comp-arrow-up");
	const compArwDwn = document.querySelector(".comp-arrow-dwn");

	if (featHidden) {
		featMenu.classList.remove("feat-li-hidden");
		featArwUp.classList.add("arrow-hidden");
		featArwDwn.classList.remove("arrow-hidden");

		compMenu.classList.add("comp-li-hidden");
		compArwUp.classList.add("arrow-hidden");
		compArwDwn.classList.remove("arrow-hidden");
	} else {
		featMenu.classList.add("feat-li-hidden");
		featArwUp.classList.remove("arrow-hidden");
		featArwDwn.classList.add("arrow-hidden");
	}
});

company.addEventListener("click", () => {
	let featHidden = featMenu.classList.contains("feat-li-hidden");
	const featArwUp = document.querySelector(".feat-arrow-up");
	const featArwDwn = document.querySelector(".feat-arrow-dwn");

	let compHidden = compMenu.classList.contains("comp-li-hidden");
	const compArwUp = document.querySelector(".comp-arrow-up");
	const compArwDwn = document.querySelector(".comp-arrow-dwn");

	if (compHidden) {
		compMenu.classList.remove("comp-li-hidden");
		compArwUp.classList.remove("arrow-hidden");
		compArwDwn.classList.add("arrow-hidden");

		featMenu.classList.add("feat-li-hidden");
		featArwUp.classList.remove("arrow-hidden");
		featArwDwn.classList.add("arrow-hidden");
	} else {
		compMenu.classList.add("comp-li-hidden");
		compArwUp.classList.add("arrow-hidden");
		compArwDwn.classList.remove("arrow-hidden");
	}
});
