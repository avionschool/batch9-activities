export default {
	0: function (fieldId, fieldValue) {
		let error = false
		let errorMessage = ""

		if (fieldId === "number") {
			return { error: false, errorMessage: "" }
		}

		if (fieldId === "dropdown") {
			error = fieldValue.trim() === "initial"
			errorMessage = error ? "please select an option" : ""
			console.log(errorMessage)
		}

		if (["name", "email", "number"].includes(fieldId)) {
			error = fieldValue.trim() === ""
			errorMessage = error ? "this field is required" : ""
		}

		return { error, errorMessage }
	},
	1: function (fieldId, fieldValue) {
		if (fieldId === "email") {
			const error = !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(fieldValue)
			const errorMessage = error ? "this email is invalid" : ""
			return { error, errorMessage }
		}

		if (fieldId === "number") {
			const error = !/^([1-9][0-9]?){0,1}$/g.test(fieldValue)
			const errorMessage = error ? "age is not valid" : ""
			return { error, errorMessage }
		}

		return { error: false, errorMessage: "" }
	}
}
