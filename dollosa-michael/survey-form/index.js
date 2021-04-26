console.log("test script");
console.log(window.location.href)
const name = document.getElementById("name");
const submit = document.getElementById("submit")
const form = document.getElementById("survey-form")
const errMsg = document.getElementById("invalid-msg")
const successMsg = document.getElementById("success-msg")
const filler = document.getElementById("filler")


submit.addEventListener('click', e => {

  if(!form.checkValidity()) {
    successMsg.style.display = "none"
    filler.style.display = "none"
    errMsg.style.display = "block"
  }
  
});


