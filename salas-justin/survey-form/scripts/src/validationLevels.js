export default {
  0: function (fieldId, fieldValue) {
    let error = false;
    let errorMessage = "";

    if (fieldId === "number") {
      return { error: false, errorMessage: "" };
    }

    if (fieldId === "dropdown") {
      error = fieldValue.trim() === "initial";
      errorMessage = error ? "please select an option" : "";
    }

    if (["name", "email", "number", "feedback"].includes(fieldId)) {
      error = fieldValue.trim() === "";
      errorMessage = error ? "this field is required" : "";
    }

    if (["radio1", "radio2", "radio3", "radio4"].includes(fieldId)) {
      error = fieldValue.trim() === "";
      errorMessage = error ? "please select an option" : "";
    }

    if (["check1", "check2", "check3", "check4"].includes(fieldId)) {
      error = fieldValue.length <= 0;
      errorMessage = error ? "please select an option" : "";
    }

    return { error, errorMessage };
  },
  1: function (fieldId, fieldValue) {
    if (fieldId === "email") {
      const error = !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(fieldValue);
      const errorMessage = error ? "this email is invalid" : "";
      return { error, errorMessage };
    }

    if (fieldId === "number") {
      const error = !/^([1-9][0-9]?){0,1}$/g.test(fieldValue);
      const errorMessage = error ? "age is not valid" : "";
      return { error, errorMessage };
    }

    if (fieldId === "name") {
      const error = !/^\s*([A-Za-z]{1,}([\.,] |[-']| ))+[A-Za-z]+\.?\s*$/.test(
        fieldValue
      );
      const errorMessage = error ? "this name is invalid" : "";
      return { error, errorMessage };
    }

    return { error: false, errorMessage: "" };
  }
};
