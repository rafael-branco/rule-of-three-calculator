// calculate.test.js

const { JSDOM } = require('jsdom');
const { calculate, calculateRuleOfThree, clearFields } = require('../javascript/script');

const dom = new JSDOM(`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Test</title>
</head>
<body>
    <input type="text" id="box-1" value="">
    <input type="text" id="box-2" value="">
    <input type="text" id="box-3" value="">
    <input type="text" id="result" value="">
    <div id="message"></div>
</body>
</html>
`);

global.document = dom.window.document;

describe('calculate', () => {
    test('should show message if any field is empty', () => {
        document.querySelector('#box-1').value = '';
        document.querySelector('#box-2').value = '10';
        document.querySelector('#box-3').value = '20';

        calculate();

        expect(document.querySelector('#message').innerHTML).toBe('Fields cannot be zero or empty.');
        expect(document.querySelector('#result').value).toBe('');
    });

    test('should show message if any field is zero', () => {
        document.querySelector('#box-1').value = '0';
        document.querySelector('#box-2').value = '10';
        document.querySelector('#box-3').value = '20';

        calculate();

        expect(document.querySelector('#message').innerHTML).toBe('Fields cannot be zero or empty.');
        expect(document.querySelector('#result').value).toBe('');
    });

    test('should show message if any field is not a valid number', () => {
        document.querySelector('#box-1').value = 'abc';
        document.querySelector('#box-2').value = '10';
        document.querySelector('#box-3').value = '20';

        calculate();

        expect(document.querySelector('#message').innerHTML).toBe('Fields must contain valid numbers.');
        expect(document.querySelector('#result').value).toBe('');
    });

    test('should calculate and format result correctly', () => {
        document.querySelector('#box-1').value = '5';
        document.querySelector('#box-2').value = '10';
        document.querySelector('#box-3').value = '20';

        calculate();

        expect(document.querySelector('#message').innerHTML).toBe('');
        expect(document.querySelector('#result').value).toBe('40');
    });

    test('should calculate and not format result if it is an integer', () => {
        document.querySelector('#box-1').value = '2';
        document.querySelector('#box-2').value = '10';
        document.querySelector('#box-3').value = '20';

        calculate();

        expect(document.querySelector('#message').innerHTML).toBe('');
        expect(document.querySelector('#result').value).toBe('100');
    });
});

describe('calculateRuleOfThree', () => {
    test('should return correct result for valid inputs', () => {
        expect(calculateRuleOfThree(5, 10, 20)).toBe(40);
        expect(calculateRuleOfThree(2, 10, 20)).toBe(100);
    });

    test('should handle division by zero (infinity)', () => {
        expect(calculateRuleOfThree(0, 10, 20)).toBe(Infinity);
    });
});

describe('clearFields', () => {
    test('should clear all input fields and message', () => {
        document.querySelector('#box-1').value = '5';
        document.querySelector('#box-2').value = '10';
        document.querySelector('#box-3').value = '20';
        document.querySelector('#result').value = '40';
        document.querySelector('#message').innerHTML = 'Test message';

        clearFields();

        expect(document.querySelector('#box-1').value).toBe('');
        expect(document.querySelector('#box-2').value).toBe('');
        expect(document.querySelector('#box-3').value).toBe('');
        expect(document.querySelector('#result').value).toBe('');
        expect(document.querySelector('#message').innerHTML).toBe('');
    });
});

