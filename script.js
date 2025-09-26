document.addEventListener("DOMContentLoaded", () => {
	const body = document.querySelector("body");
	const buttons = document.querySelectorAll(".menu_button");
	const open = document.querySelector(".menu_open");

	// toggle for the mobile nav
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

	// esc key to close mobile drawer
	document.addEventListener("keydown", (e) => {
		if (e.key === "Escape" && body.classList.contains("menu_active")) {
			body.classList.remove("menu_active");
			open.setAttribute("aria-expanded", "false");
		}
	});

	// on scroll body class
	const onScroll = document.querySelector(".on_scroll");
	const observer = new IntersectionObserver(
		([entry]) => {
			document.body.classList.toggle("scrolled", !entry.isIntersecting);
		},
		{ rootMargin: "50px 0px 0px 0px" }
	);

	observer.observe(onScroll);
});
