const assert = require('node:assert');
const test = require('node:test');

test('my first test', (t) => {
assert.strictEqual(4, 2+2);
});


test('"shecodes" contains e exactly twice', () => {
    const word = "shecodes";
    const count = [...word].filter(char => char === 'e').length;

    assert.strictEqual(count, 2);
});


test('empty array length is zero', () => {
    const arr = [];

    assert.strictEqual(arr.length, 0);
});


test('numbers 0 to 10 do not contain null', () => {
    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    assert.strictEqual(numbers.includes(null), false);
});
