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