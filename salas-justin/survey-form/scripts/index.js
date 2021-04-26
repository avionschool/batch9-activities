import validateField from "./src/validateField.js"

const form = document.querySelector(".form")

const fieldConfigs = [
	{ id: "name", type: "text" },
	{ id: "email", type: "text" },
	{ id: "number", type: "text" },
	{ id: "dropdown", type: "drop" }
]

form.addEventListener("submit", e => {
	e.preventDefault()
	//validate each field when submit is fired
	fieldConfigs.forEach(({ id, type }) => {
		const field = document.querySelector(`#${id}`)
		validateField(field, id, type)
	})
})

fieldConfigs.forEach(({ id, type }) => {
	const field = document.querySelector(`#${id}`)
	field.addEventListener("input", event => {
		validateField(field, id, type)
	})
})
