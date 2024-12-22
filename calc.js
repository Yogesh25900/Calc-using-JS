// Get the display input element
const display = document.getElementById('display');

// Get all buttons on the calculator
const buttons = document.querySelectorAll('.buttons button');

// Variable to hold the current expression
let currentInput = "";

// Add event listeners to each button
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (value === 'C') {
            // Clear the display
            currentInput = "";
            display.value = "";
        } else if (value === '=') {
            try {
                // Evaluate the expression and update the display
                currentInput = eval(currentInput).toString();
                display.value = currentInput;
            } catch (error) {
                display.value = "Error";
                currentInput = "";
            }
        } else {
            // Append the button value to the expression
            currentInput += value;
            display.value = currentInput;
        }
    });
});
