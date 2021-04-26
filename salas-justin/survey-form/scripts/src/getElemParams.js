export default function (field, type) {
	if (type === "text") {
		const label = field.nextElementSibling
		const container = field.parentElement
		const toolkit = container.nextElementSibling
		const fieldValue = field.value
		return { label, container, toolkit, fieldValue }
	}

	if (type === "drop") {
		const label = field.previousElementSibling
		const container = field.parentElement
		const toolkit = container.nextElementSibling
		const fieldValue = field.value
		return { label, container, toolkit, fieldValue }
	}
}
