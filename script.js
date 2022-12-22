let valueBox = document.getElementById("valueBox");
let error = document.getElementById("error");

let operator = "";
let firstValue = 0;
let secondValue = 0;
valueBox.value = "0";

//on number click
function numpadClick(value) {
  // debugger;
  if (
    (value === "." &&
      !valueBox.value.includes(".") &&
      (valueBox.value === "0" || valueBox.value !== "0")) ||
    valueBox.value.endsWith(".")
  ) {
    valueBox.value += value;
  } else if (valueBox.value === "0") {
    valueBox.value = "";
    valueBox.value += value;
    secondValue = valueBox.value;
    error.innerHTML = "";
  } else if (operator && firstValue === 0) {
    firstValue = valueBox.value;
    valueBox.value = "";
    valueBox.value += value;
    secondValue = valueBox.value;
  } else if (operator && firstValue !== 0) {
    firstValue = valueBox.value;
    valueBox.value = value;
    secondValue = valueBox.value;
    error.innerHTML = "";
  } else if (value !== ".") {
    valueBox.value += value;
  }
}

//to set default value 0 in input box
function clean() {
  if (valueBox.value !== "0") {
    valueBox.value = "0";
  }
}

//on operators click
function operatorsClick(action) {
  if (
    (firstValue && valueBox.value && operator === action) ||
    action === "sqrrt" ||
    action === "sqr" ||
    action === "+/-" ||
    action === "%" ||
    action === "1/x"
  ) {
    operator = action;
    equalClick();
  } else if (operator !== action) {
    if (operator === "+") {
      valueBox.value = parseFloat(firstValue) + parseFloat(secondValue);
    }
    if (operator === "-") {
      valueBox.value = parseFloat(firstValue) - parseFloat(secondValue);
    }
    if (operator === "*") {
      valueBox.value = parseFloat(firstValue) * parseFloat(secondValue);
    }
    if (operator === "/") {
      valueBox.value = parseFloat(firstValue) / parseFloat(secondValue);
    }

    operator = action;
    firstValue = valueBox.value;
  }
}

//on equal button click
function equalClick() {
  if (operator === "+") {
    valueBox.value = parseFloat(firstValue) + parseFloat(secondValue);
  }

  if (operator === "-") {
    valueBox.value = parseFloat(firstValue) - parseFloat(secondValue);
  }

  if (operator === "*") {
    valueBox.value = parseFloat(firstValue) * parseFloat(secondValue);
  }

  if (operator === "/") {
    valueBox.value = secondValue
      ? "Can't divided by  0"
      : parseFloat(firstValue) / parseFloat(secondValue);
  }

  if (operator === "sqrrt") {
    valueBox.value = Math.sqrt(parseFloat(valueBox.value));
  }

  if (operator === "sqr") {
    valueBox.value = parseFloat(valueBox.value) * parseFloat(valueBox.value);
  }

  if (operator === "+/-") {
    if (!valueBox.value.includes("-")) {
      valueBox.value = "-" + valueBox.value;
    }
  }

  if (operator === "%") {
    valueBox.value = parseFloat(valueBox.value) / 100;
  }

  if (operator === "1/x") {
    valueBox.value = 1 / parseFloat(valueBox.value);
  }

  firstValue = valueBox.value;
}
