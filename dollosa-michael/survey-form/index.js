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



// console.log(window.location.href)

// function getUrlParameter(name) {
//   name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
//   var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
//   var results = regex.exec(location.search);
//   return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
// };

// console.log(getUrlParameter("name"));
// console.log(getUrlParameter("email"));
// console.log(getUrlParameter("contact"));
// console.log(getUrlParameter("sex"));
// console.log(getUrlParameter("source"));
// console.log(getUrlParameter("feedback"));

