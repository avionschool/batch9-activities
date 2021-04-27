import validationLevels from "./validationLevels.js";
import getElemParams from "./getElemParams.js";
import { formData, errorData } from "./globalData.js";

function checkKey(type, fieldId) {
  if (type === "check") {
    return "check";
  } else if (type === "radio") {
    return "radio";
  } else {
    return fieldId;
  }
}

export default function (field, fieldId, type) {
  let status = false;
  let message = "";

  const labelName = {
    radio: `${type}__question_error`,
    check: `${type}__question_error`,
    text: `${type}__label_error`,
    area: `${type}__label_error`,
    drop: `${type}__label_error`
  };

  const containerName = {
    radio: `${type}-group_error`,
    check: `${type}-group_error`,
    text: `${type}-input_error`,
    drop: `${type}-input_error`,
    area: `${type}-input_error`
  };

  const { label, container, toolkit, fieldValue } = getElemParams(field, type);
  for (let i = 0; i <= 1; i++) {
    const { error, errorMessage } = validationLevels[i](fieldId, fieldValue);

    if (error) {
      status = true;
      message = errorMessage;
      formData[checkKey(type, fieldId)] = "";
      errorData[checkKey(type, fieldId)] = true;
      break;
    } else {
      formData[checkKey(type, fieldId)] = fieldValue;
      errorData[checkKey(type, fieldId)] = false;
      continue;
    }
  }

  toolkit.innerText = message;
  field.classList.toggle(`${type}__field_error`, status);
  toolkit.classList.toggle(`${type}__toolkit_error`, status);
  label.classList.toggle(labelName[type], status);
  container.classList.toggle(containerName[type], status);
}
