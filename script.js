document.addEventListener("DOMContentLoaded", () => {
	const body = document.querySelector("body");
	const buttons = document.querySelectorAll(".menu_button");
	const open = document.querySelector(".menu_open");

	buttons.forEach((button) => {
		button.addEventListener("click", () => {
			const isActive = body.classList.toggle("menu_active");
			if (isActive) {
				open.setAttribute("aria-expanded", "true");
			} else {
				open.setAttribute("aria-expanded", "false");
			}
		});
	});

	document.addEventListener("keydown", (e) => {
		if (e.key === "Escape" && body.classList.contains("menu_active")) {
			body.classList.remove("menu_active");
			open.setAttribute("aria-expanded", "false");
		}
	});

	function updateBodyScrollClass() {
		document.body.classList.toggle("scrolled", window.scrollY > 32);
	}

	// run once on load
	updateBodyScrollClass();

	// run on scroll
	window.addEventListener("scroll", updateBodyScrollClass);
});
