const errorPrag = document.querySelector(".form-error");

export default function (yes) {
  if (yes) {
    errorPrag.innerText = "please review errors";
  } else {
    errorPrag.innerText = "";
  }
}
