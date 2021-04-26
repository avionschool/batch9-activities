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


setStatus(field, message, status) {
    const label = field.nextElementSibling
    const parent = field.parentElement

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


this.setStatus(
    field,
    `${field.nextElementSibling.innerText} cannot be blank`,
    "error"
)