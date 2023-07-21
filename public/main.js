let topMenu = document.getElementById("my_menu");
let toggleIcon = document.getElementById("my_toggle-menu");
document.addEventListener("click", (e) => {
	if (toggleIcon.contains(e.target)) {
		if (topMenu.classList.contains("my_menu-expanded")) {
			console.log("=== 1 ===");
			topMenu.classList.add("slideOut");
			setTimeout(() => {
				topMenu.classList.toggle("hidden");
			}, 500);
			setTimeout(() => {
				topMenu.classList.remove("my_menu-expanded");
				topMenu.classList.remove("slideOut");
			}, 500);
		} else {
			console.log("=== 2 ===");
			topMenu.classList.toggle("hidden");
			// topMenu.classList.toggle("slideOut");
			topMenu.classList.toggle("my_menu-expanded");
		}
	} else {
		// topMenu.classList.remove("my_menu-expanded");
		if (window.matchMedia("(max-width: 1024px)").matches) {
			topMenu.classList.add("slideOut");
		}
		setTimeout(() => {
			topMenu.classList.remove("my_menu-expanded");
			topMenu.classList.remove("slideOut");
		}, 500);
		setTimeout(() => {
			topMenu.classList.add("hidden");
		}, 500);
	}
});
