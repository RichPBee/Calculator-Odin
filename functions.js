let inputArray = [];
const appDisplay = document.querySelector(".app-display");
const operatorArray = ["add", "subtract", "multiply", "divide", "equals"];


//The below two functions are designed to ensure the first and last elements on the display are not operators.
const checkFirstElement = () => {
    if (operatorArray.includes(inputArray[0])) {
        appDisplay.removeChild(appDisplay.firstElementChild);
        inputArray.shift();
    }
}

const checkLastElement = () => {
    let previousEle = inputArray.length - 2;
    if (operatorArray.includes(inputArray[previousEle])) {
        appDisplay.removeChild(appDisplay.lastElementChild);
        inputArray.pop();
    }
}


//Retrieving data from the buttons to populate the display.
const addToDisplay = (input) => {
    const item = document.createElement("h1");
    item.textContent = input.toString();
    appDisplay.appendChild(item);
    if (inputArray.length > 10) {
        appDisplay.removeChild(appDisplay.firstElementChild);
        inputArray.shift();
        checkFirstElement();
        checkLastElement();
    }
    
}

//Selecting the operators and getting them to output to the DOM.
const operatorButtons = document.querySelectorAll(".operator-button");
operatorButtons.forEach(button => {
    let selection = button.id;
    button.addEventListener("click", () => {
        const selectionIcon = document.createElement("i");
        selectionIcon.setAttribute("class", `${button.firstElementChild.className}`);
        appDisplay.appendChild(selectionIcon);
        inputArray.push(selection);
        if (selection == "equals") {
            while (inputArray.length > 1) {
                reduceNumbers();
            }
            return;
        } else if (inputArray.length > 10) {
                appDisplay.removeChild(appDisplay.firstElementChild);
                inputArray.shift(inputArray);
                checkFirstElement();
                checkLastElement();
        }
        else {
            checkFirstElement();
            checkLastElement();
        }
    })
})
const reduceNumbers = () => {
        let firstNumber = ""
        let operation = ""
        let secondNumber = ""
        let tempArray = [];
        let solution;
        for (let i = 0; i < inputArray.length; i ++) {
            if (operation =="" && !operatorArray.includes(inputArray[i])) {
                firstNumber += inputArray[i];
            } else if (operation == "" && operatorArray.includes(inputArray[i])) {
                operation = inputArray[i];
            } else if (operation !== "" && !operatorArray.includes(inputArray[i])) {
                secondNumber += inputArray[i];
            } else if (operation !== "" && operatorArray.includes(inputArray[i]) && inputArray[i] !== "equals") {
                solution = operate(parseInt(firstNumber), operation, parseInt(secondNumber))
                tempArray.push(solution);
                let remaining = inputArray.slice(i);
                let reducedArray = tempArray.concat(remaining); 
                inputArray = reducedArray;
                return
            } else if (operation !== "" && operatorArray.includes(inputArray[i]) && inputArray[i] == "equals")  {
                solution = operate(parseInt(firstNumber), operation, parseInt(secondNumber));
                solution = solution.toPrecision(9);
                tempArray = [];
                tempArray.push(solution);
                inputArray = tempArray;
                const solutionDisplay = document.createElement("h1");
                solutionDisplay.innerHTML = inputArray[0];
                appDisplay.innerHTML = "";
                appDisplay.appendChild(solutionDisplay);
            }
        }

}

/* const reduceNumbers = () => {
    let firstNumber = "";
    let secondNumber = "";
    let operation = "";
    let tempArray = [];
    for (let i = 0; i < inputArray.length; i++) {
        if (operation == "" && !operatorArray.includes(inputArray[i])) {
            firstNumber += inputArray[i];
        } else if (operation == "" && operatorArray.includes(inputArray[i])) {
            operation += inputArray[i];
        } else if (operation !== "" && !operatorArray.includes(inputArray[i])) {
            secondNumber += inputArray[i];
        } else if (operation !== "" && operatorArray.includes(inputArray[i]) && inputArray[i] !== "equals") {
            let solution = operate(firstNumber, operation, secondNumber);
            tempArray.push(solution);
            let reducedArray = tempArray.concat(inputArray.slice(i));
            inputArray = reducedArray;
            return;
        } else if (operation !== "" && operatorArray.includes(inputArray[i]) && inputArray[i] !== "equals") {
            let solution = operate(firstNumber, operation, secondNumber);
            tempArray.push(solution);
            inputArra = tempArray;
            const solutionDisplay = document.createElement("h1");
            solutionDisplay.innerHTML = inputArray[0].toString();
            appDisplay.innerHTML = "";
            appDisplay.appendChild(solutionDisplay);
        }
    }
} */


//Quick function to create 12 buttons (0-9 + 2 spare for later additions) for numberpad, others will be hardcoded
const numberButtons = () => {
    for (let i = 0; i < 12; i ++) {
        const numButton = document.createElement("button");
        const leftNumPad = document.querySelector(".npb-left");
        numButton.setAttribute("class", "number-button");
        if (i >= 2 && i <= 11) {
            numButton.textContent = `${i - 2}`;
            numButton.setAttribute("id", `${i - 2}`);
            numButton.addEventListener("click", () => {     
                addToDisplay(numButton.id);
                inputArray.push(numButton.id);
            })
        } else {
            numButton.textContent = "";
            numButton.disabled = true;
        }
        leftNumPad.insertBefore(numButton, leftNumPad.firstChild);
    }
}
numberButtons();

const clearButton = document.querySelector(".top-button.clear");
clearButton.addEventListener("click", () => {
    appDisplay.innerHTML = "";
    inputArray = [];
})

const backspace = document.querySelector(".top-button.backspace");
backspace.addEventListener("click", () => {
    appDisplay.removeChild(appDisplay.lastElementChild);
    inputArray.pop();
})

const add = (a, b) => {
    parseInt(a);
    parseInt(b);
    return a + b;
}

const subtract = (a,b) => {
    parseInt(a);
    parseInt(b);
    return a - b;
}

const multiply = (a,b) => {
    parseInt(a);
    parseInt(b);
    return a * b;
}

const divide = (a,b) => {
    parseInt(a);
    parseInt(b);
    if (b == 0) {
        return "Bad Maths"
    } else {
        return a / b;
    }
}

/*
const add = (...args) => {
    let total;
    for (arg of args) {
        total += arg;
    }
    return total;
 }

 const subtract = (...args) => {
    let total = args[0];
      for (let i = 1; i < args.length; i++) {
        total -= args[i];
      }
    return total;
  }

  const multiply = (array) => {
    let total = 1;
    array.forEach(ele => {
      total *= ele;
    })
    return total;
  }

  const divide = (array) => {
    let total = args[0];
    for (let i = 1; i < args.length; i++) {
        if (args[i] == 0) {
            return "Bad Maths"
        }
        total /= args[i];
      }
    return total;
  } */

const operate = (a, operator, b) => {
    return (operator == "add") ? add(a,b)
        : (operator == "subtract") ? subtract(a,b)
        : (operator == "multiply") ? multiply(a,b)
        : (operator == "divide") ? divide(a,b)
        : undefined
};




