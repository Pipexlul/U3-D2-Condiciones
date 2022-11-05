// DOM Nodes
const passSelects = document.querySelectorAll(".part3-select");
const passButton = document.querySelector("#part3-button");
const passResponse = document.querySelector("#part3-response");

const allStyles = ["incorrect-pass", "correct-pass1", "correct-pass2"];

// Helper Funcs
const fillSelects = () => {
  passSelects.forEach((sel, idx) => {
    for (let i = 1; i < 10; i++) {
      const optionElem = document.createElement("option");
      optionElem.value = optionElem.textContent = i;

      sel.appendChild(optionElem);
    }
  });
};

const checkPassword = ([num1, num2, num3]) => {
  const result = {
    valid: 0,
    response: "Password Incorrecta",
  };

  const setValidResult = (successId, successMsg) => {
    result.valid = successId;
    result.response = successMsg;
  };

  if (num1 == 9 && num2 == 1 && num3 == 1) {
    setValidResult(1, "Password 1 Correcta!");
  } else if (num1 == 7 && num2 == 1 && num3 == 4) {
    setValidResult(2, "Password 2 Correcta!");
  }

  return result;
};

const getPassValues = () => {
  const asArray = Array.from(passSelects);

  return asArray.map((val, idx) => {
    return Number(val.value);
  });
};

const cleanStyles = (node) => {
  allStyles.forEach((style, idx) => {
    node.classList.remove(style);
  });
};

const applyStyle = (node, idx) => {
  node.classList.add(allStyles[idx]);
};

// Events
passButton.addEventListener("click", (ev) => {
  const values = getPassValues();

  const result = checkPassword(values);

  cleanStyles(passResponse);
  applyStyle(passResponse, result.valid);

  passResponse.textContent = result.response;
});

// Setup
fillSelects();
