/* ## day 7

create your own calculator, but with a very important detail: each operation must be a different function in your code.

first, the person must choose an operation option printed by the program on the screen.

then, she must enter the two values she wants to use, and the program will print the result of the operation in question.

the available options should be: addition, subtraction, multiplication, division, and exit. In the latter, the program should stop running, showing a message "see you next time".*/

let addition = function (a, b) {
    return a + b;
}

let subtraction = function (a, b) {
    return a - b;
}

let multiplication = function (a, b) {
    return a * b;
}

let division = function (a, b) {
    return a / b;
}

let exit = function () {
    alert("see you next time");
}

do {
    chooseOperation = prompt("choose an operation: addition, subtraction, multiplication, division, exit");
    while (chooseOperation != "addition" && chooseOperation != "subtraction" && chooseOperation != "multiplication" && chooseOperation != "division" && chooseOperation != "exit") {
        alert("please answer addition, subtraction, multiplication, division, or exit");
        chooseOperation = prompt("choose an operation: addition, subtraction, multiplication, division, exit");
    }
    if (chooseOperation === "exit") {
        break;
    } else {
        let a = parseInt(prompt("enter the first number"));
        let b = parseInt(prompt("enter the second number"));
        if (chooseOperation === "addition") {
            alert(addition(a, b));
        } else if (chooseOperation === "subtraction") {
            alert(subtraction(a, b));
        } else if (chooseOperation === "multiplication") {
            alert(multiplication(a, b));
        } else if (chooseOperation === "division") {
            alert(division(a, b));
        }
    }
} while (chooseOperation === "addition" || chooseOperation === "subtraction" || chooseOperation === "multiplication" || chooseOperation === "division")
alert("see you next time");