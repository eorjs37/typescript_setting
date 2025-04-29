"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BasicCalculator {
    constructor(value = 0) {
        this.value = value;
    }
    currentValue() {
        return this.value;
    }
    add(operand) {
        this.value += operand;
        return this;
    }
    multiply(operand) {
        this.value *= operand;
        return this;
    }
}
let v = new BasicCalculator(2).multiply(5).add(1).currentValue();
//
class ScientifiCalculator extends BasicCalculator {
    constructor(value = 0) {
        super(value);
    }
    sin() {
        this.value = Math.sin(this.value);
        return this;
    }
}
let v2 = new ScientifiCalculator(2).multiply(5).sin().add(1).currentValue();
