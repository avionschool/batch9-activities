export class FormValidator {
	constructor(form, fields) {
		this.form = form
		this.fields = fields
	}

	initialize() {
		this.validateOnEntry()
		this.validateOnSubmit()
	}

	validateOnSubmit() {
		let self = this

		this.form.addEventListener("submit", e => {
			e.preventDefault()
			self.fields.forEach(field => {
				const input = document.querySelector(`#${field}`)
				self.validateFields(input)
			})
		})
	}

	validateOnEntry() {
		let self = this
		this.fields.forEach(field => {
			const input = document.querySelector(`#${field}`)

			input.addEventListener("input", event => {
				self.validateFields(input)
			})
		})
	}

	validateFields(field) {
		// Check presence of values
		if (field.value.trim() === "") {
			this.setStatus(
				field,
				`${field.previousElementSibling.innerText} cannot be blank`,
				"error"
			)
		} else {
			this.setStatus(field, null, "success")
		}

		// check for a valid email address
		if (field.type === "email") {
			const re = /\S+@\S+\.\S+/
			if (re.test(field.value)) {
				this.setStatus(field, null, "success")
			} else {
				this.setStatus(field, "Please enter valid email address", "error")
			}
		}

		// Password confirmation edge case
		if (field.id === "password_confirmation") {
			const passwordField = this.form.querySelector("#password")

			if (field.value.trim() == "") {
				this.setStatus(field, "Password confirmation required", "error")
			} else if (field.value != passwordField.value) {
				this.setStatus(field, "Password does not match", "error")
			} else {
				this.setStatus(field, null, "success")
			}
		}
	}

	setStatus(field, message, status) {
		const successIcon = field.parentElement.querySelector(".icon-success")
		const errorIcon = field.parentElement.querySelector(".icon-error")
		const errorMessage = field.parentElement.querySelector(".error-message")

		if (status === "success") {
			if (errorIcon) {
				errorIcon.classList.add("hidden")
			}
			if (errorMessage) {
				errorMessage.innerText = ""
			}
			successIcon.classList.remove("hidden")
			field.classList.remove("input-error")
		}

		if (status === "error") {
			if (successIcon) {
				successIcon.classList.add("hidden")
			}
			field.parentElement.querySelector(".error-message").innerText = message
			errorIcon.classList.remove("hidden")
			field.classList.add("input-error")
		}
	}
}

const form = document.querySelector(".form")
const fields = ["username", "email", "password", "password_confirmation"]

const validator = new FormValidator(form, fields)
validator.initialize()
