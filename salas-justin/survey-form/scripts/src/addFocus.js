const radioField = document.querySelector(".radio__field");
const checkField = document.querySelector(".check__field");
radioField.addEventListener("focus", function () {
  radioField
    .closest(".radio-group")
    .querySelector(".radio__question")
    .classList.add("radio__question_focused");
});

checkField.addEventListener("focus", function () {
  checkField
    .closest(".check-group")
    .querySelector(".check__question")
    .classList.add("check__question_focused");
});
