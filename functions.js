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
  }