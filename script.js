document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".btn");
    const display = document.getElementById("display");
    let currentInput = "";
    let operator = null;
    let firstOperand = null;

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const value = button.getAttribute("data-value");

            if (value === "C") {
                // Clear everything
                currentInput = "";
                firstOperand = null;
                operator = null;
                display.textContent = "0";
            } else if (value === "=") {
                // Perform the calculation
                if (firstOperand !== null && operator !== null) {
                    const secondOperand = parseFloat(currentInput);
                    currentInput = performCalculation(firstOperand, secondOperand, operator).toString();
                    display.textContent = currentInput;
                    firstOperand = null;
                    operator = null;
                }
            } else if (["+", "-", "*", "/"].includes(value)) {
                // Handle operator input
                if (currentInput !== "") {
                    firstOperand = parseFloat(currentInput);
                    operator = value;
                    currentInput = "";
                }
            } else {
                // Handle number and decimal input
                currentInput += value;
                display.textContent = currentInput;
            }
        });
    });

    function performCalculation(first, second, operator) {
        switch (operator) {
            case "+":
                return first + second;
            case "-":
                return first - second;
            case "*":
                return first * second;
            case "/":
                return first / second;
            default:
                return second;
        }
    }
});
