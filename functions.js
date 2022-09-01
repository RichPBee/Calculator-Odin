const add = (a, b) => {
    return a + b;
}

const subtract = (a,b) => {
    return a - b;
}

const multiply = (a,b) => {
    return a * b;
}

const divide = (a,b) => {
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


//Quick function to create 12 buttons (0-9 + 2 spare for later additions) for numberpad, others will be hardcoded
const numberButtons = () => {
    for (let i = 0; i < 12; i ++) {
        const numButton = document.createElement("button");
        const leftNumPad = document.querySelector(".npb-left");
        numButton.setAttribute("class", "number-button");
        if (i >= 2 && i <= 11) {
            numButton.textContent = `${i - 2}`;
            numButton.setAttribute("id", `${i - 2}`);
        } else {
            numButton.textContent = "";
        }
        leftNumPad.insertBefore(numButton, leftNumPad.firstChild);
    }
}
numberButtons();
