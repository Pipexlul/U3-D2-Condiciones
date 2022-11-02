const button = document.querySelector("#button-border");
const buttonText = document.querySelector("#button-text");
const targetPic = document.querySelector("#part1-pic");

let btnState = false;

button.addEventListener("click", (ev) => {
  let btnWord = "añadir";

  if (btnState) {
    targetPic.classList.remove("added-border");
  } else {
    targetPic.classList.add("added-border");
    btnWord = "remover";
  }

  buttonText.textContent = btnWord;

  btnState = !btnState;
});
