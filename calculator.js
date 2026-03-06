class Calculator {
  constructor() {
    this.history = [];
  }

  add(a, b) {
    const result = a + b;
    this.history.push(`${a} + ${b} = ${result}`);
    return result;
  }

  subtract(a, b) {
    const result = a - b;
    this.history.push(`${a} - ${b} = ${result}`);
    return result;
  }

  multiply(a, b) {
    const result = a * b;
    this.history.push(`${a} * ${b} = ${result}`);
    return result;
  }

  divide(a, b) {
    if (b === 0) {
      return "Error: Division by zero";
    }
    const result = a / b;
    this.history.push(`${a} / ${b} = ${result}`);
    return result;
  }

  squareRoot(x) {
    if (x < 0) {
      return "Error: Cannot take square root of a negative number";
    }
    const result = Math.sqrt(x);
    this.history.push(`sqrt(${x}) = ${result}`);
    return result;
  }

  power(base, exponent) {
    const result = Math.pow(base, exponent);
    this.history.push(`${base} ^ ${exponent} = ${result}`);
    return result;
  }

  getHistory() {
    return this.history;
  }

  clearHistory() {
    this.history = [];
  }

  printHistory() {
    console.log("--- Calculation History ---");
    this.history.forEach((operation, index) => {
      console.log(`${index + 1}. ${operation}`);
    });
    console.log("---------------------------");
  }
}

// Example usage
const calc = new Calculator();
console.log(calc.add(5, 3));           // Output: 8
console.log(calc.subtract(10, 4));     // Output: 6
console.log(calc.multiply(2, 6));      // Output: 12
console.log(calc.divide(8, 2));        // Output: 4
console.log(calc.squareRoot(16));      // Output: 4
console.log(calc.power(2, 3));         // Output: 8
calc.printHistory();

// Export for use as a module
if (typeof module !== 'undefined' && module.exports) {
  module.exports = Calculator;
}