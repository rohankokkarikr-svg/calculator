// JavaScript functionality for the scientific calculator

class ScientificCalculator {
    constructor() {
        this.result = 0;
    }

    add(a, b) {
        this.result = a + b;
        return this.result;
    }

    subtract(a, b) {
        this.result = a - b;
        return this.result;
    }

    multiply(a, b) {
        this.result = a * b;
        return this.result;
    }

    divide(a, b) {
        if (b === 0) {
            throw new Error('Cannot divide by zero');
        }
        this.result = a / b;
        return this.result;
    }

    calculateSin(angle) {
        this.result = Math.sin(angle * (Math.PI / 180)); // Convert to radians
        return this.result;
    }

    calculateCos(angle) {
        this.result = Math.cos(angle * (Math.PI / 180)); // Convert to radians
        return this.result;
    }

    calculateTan(angle) {
        this.result = Math.tan(angle * (Math.PI / 180)); // Convert to radians
        return this.result;
    }

    calculateLog(value) {
        this.result = Math.log(value);
        return this.result;
    }

    calculatePower(base, exponent) {
        this.result = Math.pow(base, exponent);
        return this.result;
    }
}

// Example usage:
const calc = new ScientificCalculator();
console.log('Add:', calc.add(5, 3));
console.log('Subtract:', calc.subtract(5, 3));
console.log('Multiply:', calc.multiply(5, 3));
console.log('Divide:', calc.divide(5, 3));
console.log('sin(30):', calc.calculateSin(30));
console.log('cos(60):', calc.calculateCos(60));
console.log('tan(45):', calc.calculateTan(45));
console.log('log(10):', calc.calculateLog(10));
console.log('5^3:', calc.calculatePower(5, 3));