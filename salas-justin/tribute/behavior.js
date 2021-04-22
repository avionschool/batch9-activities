var elements = document.querySelectorAll("p.bio-prag")

elements.forEach(element => {
	document.addEventListener("scroll", animate(element))
})

function animate(element) {
	const el = element
	return function () {
		element.classList.toggle("animate", inView(el))
	}
}

function inView(element) {
	var elementHeight = element.clientHeight
	var windowHeight = window.innerHeight
	var scrollY = window.scrollY || window.pageYOffset

	var scrollPosition = scrollY + windowHeight
	var elementPosition =
		element.getBoundingClientRect().top + scrollY + elementHeight
	if (scrollPosition > elementPosition) {
		return true
	}

	return false
}
