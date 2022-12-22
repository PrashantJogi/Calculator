let operator = null;
let firstValue = "";
let valueBox = document.getElementById("valueBox");
let firstField = document.getElementById("firstvalueBox") ?
document.getElementById("firstvalueBox") : " ";
// console.log(firstField.value, "firstField");
valueBox.value = "0";
let changed = false;
let secondValue = null;
let error = document.getElementById("error");
let equalClicked = false;
let equalClicked_TwoTimes = false;
//for taking numbers
function numpadClick(InputValues) {
  // debugger
  if (changed === true || valueBox.value === "0") {
    valueBox.value = "";
    firstValue += InputValues;
    valueBox.value += InputValues;
    changed = false;
    secondValue = valueBox.value;
    error.innerHTML = "";
  } else {
    valueBox.value += InputValues;
    firstValue += InputValues;
    error.innerHTML = "";
  }
}

//for cleaning input field
function clean() {
  if (valueBox.value !== "0") {
    valueBox.value = "0";
    firstValue = "";
    operator = "";
  }
}

//for operation
function operatorsClick(action) {
  console.log(
    "🚀 ~ file: script2.js ~ line 36 ~ operatorsClick ~ action",
    firstValue
  );
  // debugger

  //for choose another operator
  if (
    firstValue.endsWith("+") ||
    firstValue.endsWith("-") ||
    firstValue.endsWith("*") ||
    firstValue.endsWith("/")
  ) {
    let newValue = firstValue.split(operator, 1);
    firstValue = newValue + action;
  } else if (operator == action) {
    // firstValue = valueBox.value
    console.log(firstValue, "firstValue.value");
    if (!equalClicked) {
      if (operator) {
        firstField.value += firstValue;
        let result = Function("return " + firstValue)();
        console.log(result, "result");
        if (isNaN(result) || result === Infinity) {
          document.getElementById("error").innerHTML =
            "Please Enter valid number";
        } else {
          valueBox.value = result;
          firstValue = result;
          firstField.value += "=" + result + ",";
          // firstValue = result
          equalClicked = false;
          equalClicked_TwoTimes = false;
        }
      }
    }
    firstValue += action;
  } else if (operator !== action) {
    console.log(firstValue, "firstValue.value");
    // firstValue = valueBox.value
    if (!equalClicked) {
      if (operator) {
        firstField.value += firstValue;
        let result = Function("return " + firstValue)();
        console.log(result, "result");
        if (isNaN(result) || result === Infinity) {
          document.getElementById("error").innerHTML =
            "Please Enter valid number";
        } else {
          valueBox.value = result;
          firstField.value += "=" + result + ",";
          firstValue = result;
          // firstValue = result
          equalClicked = false;
          equalClicked_TwoTimes = false;
        }
      }
    }
    firstValue += action;
    // valueBox.value += action
    // equalClick()
  }
  operator = action;
  changed = true;
}

//for calculation on equal button
function equalClick() {
  // debugger;
  if (equalClicked_TwoTimes) {
    if (
      firstValue.endsWith("+") ||
      firstValue.endsWith("-") ||
      firstValue.endsWith("*") ||
      firstValue.endsWith("/")
    ) {
      firstValue += secondValue;
    }
  }
  console.log(firstValue, "firstValue");
  if (operator) {
    if (
      firstValue.endsWith("+") ||
      firstValue.endsWith("-") ||
      firstValue.endsWith("*") ||
      firstValue.endsWith("/")
    ) {
      document.getElementById("error").innerHTML =
        "Please Enter number after operator";
    } else {
      firstField.value += firstValue;
      let result = Function("return " + firstValue)();
      console.log(result, "result");
      if (isNaN(result) || result === Infinity) {
        document.getElementById("error").innerHTML =
          "Please Enter valid number";
      } else if (equalClicked_TwoTimes) {
        valueBox.value = result;
        firstField.value += "=" + result;
        firstValue = result + operator + secondValue;
        // firstValue = result
        equalClicked = true;
        equalClicked_TwoTimes = true;
      } else {
        {
          valueBox.value = result;
          firstField.value += "=" + result + ",";
          firstValue = result + operator;
          // firstValue = result
          equalClicked = true;
          equalClicked_TwoTimes = true;
        }
      }
    }
  }
}
