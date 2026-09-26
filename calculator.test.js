const assert = require('node:assert');
const test = require('node:test');
const { Calculator } = require('./calculator');

const calculator = new Calculator();

test('add two numbers', () => {
    assert.strictEqual(calculator.add(2, 3), 5);
});

test('subtract two numbers', () => {
    assert.strictEqual(calculator.sub(5, 3), 2);
});

test('multiply two numbers', () => {
    assert.strictEqual(calculator.mul(4, 3), 12);
});

test('divide two numbers', () => {
    assert.strictEqual(calculator.div(10, 2), 5);
});
