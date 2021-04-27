import validateField from "./src/validateField.js";
import { formData, errorData } from "./src/globalData.js";
import displayData from "./src/displayData.js";
import displayError from "./src/displayError.js";

const form = document.querySelector(".form");

const fieldConfigs = [
  { id: "name", type: "text" },
  { id: "email", type: "text" },
  { id: "number", type: "text" },
  { id: "dropdown", type: "drop" },
  { id: "radio1", type: "radio" },
  { id: "radio2", type: "radio" },
  { id: "radio3", type: "radio" },
  { id: "radio4", type: "radio" },
  { id: "check1", type: "check" },
  { id: "check2", type: "check" },
  { id: "check3", type: "check" },
  { id: "check4", type: "check" },
  { id: "feedback", type: "area" }
];

form.addEventListener("submit", e => {
  e.preventDefault();
  //validate each field when submit is fired
  fieldConfigs.forEach(({ id, type }) => {
    const field = document.querySelector(`#${id}`);
    validateField(field, id, type);
  });

  const isError = Object.values(errorData).reduce((status, current) => {
    return status || current;
  });

  if (isError) {
    displayError(true);
    return;
  } else {
    displayError(false);
    displayData(formData);
  }
});

fieldConfigs.forEach(({ id, type }) => {
  const field = document.querySelector(`#${id}`);
  field.addEventListener(
    `${type === "radio" || type === "check" ? "click" : "input"}`,
    event => {
      validateField(field, id, type);
    }
  );
});
