export default function (field, type) {
  if (type === "text" || type === "area") {
    const label = field.nextElementSibling;
    const container = field.parentElement;
    const toolkit = container.nextElementSibling;
    const fieldValue = field.value;
    return { label, container, toolkit, fieldValue };
  }

  if (type === "drop") {
    const label = field.previousElementSibling;
    const container = field.parentElement;
    const toolkit = container.nextElementSibling;
    const fieldValue = field.value;
    return { label, container, toolkit, fieldValue };
  }

  if (type === "radio") {
    const container = field.closest(".radio-group");
    const label = container.querySelector(".radio__question");
    label.classList.remove("radio__question_focused");
    const toolkit = container.querySelector(".radio__toolkit");
    const radioFields = container.querySelectorAll(".radio__field");

    let fieldValue = "";
    for (let i = 0; i <= radioFields.length - 1; i++) {
      if (radioFields[i].checked) {
        fieldValue = radioFields[i].value;
        break;
      } else {
        continue;
      }
    }

    return { label, container, toolkit, fieldValue };
  }

  if (type === "check") {
    const container = field.closest(".check-group");
    const label = container.querySelector(".check__question");
    label.classList.remove("check__question_focused");
    const toolkit = container.querySelector(".check__toolkit");
    const checkFields = container.querySelectorAll(".check__field");

    let fieldValue = [];
    for (let i = 0; i <= checkFields.length - 1; i++) {
      if (checkFields[i].checked) {
        fieldValue.push(checkFields[i].value);
      }
    }

    return { label, container, toolkit, fieldValue };
  }
}
