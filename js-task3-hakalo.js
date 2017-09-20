function prepareString(str) {
    var calculation = [];
    var current = '';

    for (var i = 0, symb; symb = str.charAt(i); i++) {
        if ('*/+-'.indexOf(symb) > -1) {
            if (current === '' && symb === '-') {
                current = '-';
            } else if (current === '' && symb === '+') {
                current = '';
            } else {
                calculation.push(parseFloat(current), symb);
                current = '';
            }
        } else {
            current += str.charAt(i);
        }
    }

    if (current !== '') {
        calculation.push(parseFloat(current));
    }

    return calculation;
}

function calculate(calc) {
    var operators = [
        {
            '*': function (a, b) {
                return a * b;
            },

            '/': function (a, b) {
                return a / b;
            },
        }, {
            '+': function (a, b) {
                return a + b;
            },

            '-': function (a, b) {
                return a - b;
            }
        }];

    var newCalc = [];
    var currentFunction;
    for (var i = 0; i < operators.length; i++) {
        for (var j = 0; j < calc.length; j++) {
            if (operators[i][calc[j]]) {
                currentFunction = operators[i][calc[j]];
            } else if (currentFunction) {
                newCalc[newCalc.length - 1] = currentFunction(newCalc[newCalc.length - 1], calc[j]);
                currentFunction = null;
            } else {
                newCalc.push(calc[j]);
            }

        }
        calc = newCalc;
        newCalc = [];
    }

    return isNaN(calc[0]) ? 'error' : calc[0];

}

var expression = prompt('введите выражение');
var answer = calculate(prepareString(expression));
console.log(answer);

