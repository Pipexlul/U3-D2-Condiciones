// DOM Nodes
const inputs = document.querySelectorAll(".part2-input");

const stickerResponse = document.querySelector("#sticker-response");
const stickerButton = document.querySelector("#sticker-button");

const stickerMap = new Map([
  [1, "WhatsApp"],
  [2, "Meta"],
  [3, "Instagram"],
]);

// Helper Funcs
const setInvalidResult = (resultObj, errorMsg) => {
  resultObj.valid = false;
  resultObj.errorReason = errorMsg;
};

const validateNums = (numArray, validatorFunc) => {
  const result = {
    valid: true,
    errorReason: "",
  };

  const faultyValues = [];

  numArray.forEach((value, idx, array) => {
    const res = validatorFunc(value.value);

    if (!res.valid) {
      faultyValues.push({ index: idx + 1, reason: res.errorReason });
    }
  });

  const faultyLength = faultyValues.length;

  if (faultyLength) {
    const msg = faultyValues.reduce(
      (prev, cur) => {
        const formatted = `\nInput ${stickerMap.get(cur.index)}: ${cur.reason}`;

        return prev + formatted;
      },
      faultyValues.length > 1 ? "Errores detectados:" : "Error detectado:"
    );

    setInvalidResult(result, msg);
  }

  return result;
};

const validateSingleNum = (num) => {
  const result = {
    valid: true,
    errorReason: "",
  };

  if (!num.length) {
    setInvalidResult(
      result,
      "Campo está vacio, debe colocar la cantidad que usted requiere"
    );
  } else {
    num = Number(num);

    if (Number.isNaN(num)) {
      setInvalidResult(
        result,
        "Campo contiene caracteres inválidos, por favor, utilize solo números"
      );
    } else if (num < 0) {
      setInvalidResult(
        result,
        "Campo contiene número negativo, solo utilize 0 o positivos"
      );
    } else if (!Number.isInteger(num)) {
      setInvalidResult(
        result,
        "Campo contiene números decimales, utilize solo enteros"
      );
    }
  }

  return result;
};

// Events
stickerButton.addEventListener("click", (ev) => {
  const result = validateNums(inputs, validateSingleNum);

  if (result.valid) {
    const total = Array.from(inputs).reduce((prev, cur) => {
      return prev + Number(cur.value);
    }, 0);

    if (total <= 10) {
      stickerResponse.textContent = `Has seleccionado un total de ${total} ${
        total === 1 ? "sticker" : "stickers"
      }!`;
    } else {
      stickerResponse.textContent = "Llevas demasiados stickers!";
    }
  } else {
    alert(result.errorReason);
  }
});
