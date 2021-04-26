import validationLevels from "./validationLevels.js"
import getElemeParams from "./getElemParams.js"

export default function (field, fieldId, type) {
	let status = false
	let message = ""

	const { label, container, toolkit, fieldValue } = getElemeParams(field, type)

	for (let i = 0; i <= 1; i++) {
		const { error, errorMessage } = validationLevels[i](fieldId, fieldValue)

		if (error) {
			status = true
			message = errorMessage
			break
		} else {
			continue
		}
	}

	toolkit.innerText = message

	field.classList.toggle(`${type}__field_error`, status)
	toolkit.classList.toggle(`${type}__toolkit_error`, status)
	label.classList.toggle(`${type}__label_error`, status)
	container.classList.toggle(`${type}-input_error`, status)
}
