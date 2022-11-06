// DOM Nodes
const button = document.querySelector("#button-border");
const buttonAlt = document.querySelector("#button-border-alt");
const buttonText = document.querySelector("#button-text");
const targetPic = document.querySelector("#part1-pic");

let btnState = false;

const clickHandler = (ev) => {
  let btnWord;

  if (btnState) {
    targetPic.classList.remove("added-border");
    btnWord = "añadir";
  } else {
    targetPic.classList.add("added-border");
    btnWord = "remover";
  }

  buttonText.textContent = btnWord;

  btnState = !btnState;
};

// Events
button.addEventListener("click", clickHandler);
buttonAlt.addEventListener("click", clickHandler);
