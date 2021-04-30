const backDrop = document.querySelector(".backdrop");
const modal = document.querySelector(".modal");
const modalButton = modal.querySelector(".modal__button");
const answer1 = modal.querySelector(".answer1");
const answer2 = modal.querySelector(".answer2");
const answer3 = modal.querySelector(".answer3");
const answer4 = modal.querySelector(".answer4");
const answer5 = modal.querySelector(".answer5");
const answer6 = modal.querySelector(".answer6");
const techList = modal.querySelector(".tech_list");

modalButton.addEventListener("click", () => {
  backDrop.classList.remove("backdrop_shown");
  modal.classList.remove("modal_shown");
  techList.innerHTML = "";
});

export default function (formData) {
  const { feedback, dropdown, name, number, email, check, radio } = formData;
  answer1.innerText = name;
  answer2.innerText = email;
  answer3.innerText = number;
  answer4.innerText = dropdown;
  answer5.innerText = radio;
  answer6.innerText = feedback;

  check.forEach(val => {
    const tech = document.createElement("li");
    tech.className = "tech_item";
    tech.innerText = val;
    techList.appendChild(tech);
  });

  modal.classList.add("modal_shown");
  backDrop.classList.add("backdrop_shown");
}
