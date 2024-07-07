document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display');
    const keys = document.querySelectorAll('.keys button');

    // Add event listeners to all calculator buttons
    keys.forEach(key => {
        key.addEventListener('click', () => {
            const keyValue = key.textContent;
            
            // Handle clear button
            if (keyValue === 'C') {
                display.value = '';
            }
            // Handle equals button
            else if (keyValue === '=') {
                try {
                    display.value = eval(display.value);
                } catch (error) {
                    display.value = 'Error';
                }
            }
            // Handle operator buttons (+, -, *, /)
            else if (key.classList.contains('operator')) {
                // Check if the last character in the display is already an operator
                const lastChar = display.value.slice(-1);
                if (lastChar === '+' || lastChar === '-' || lastChar === '*' || lastChar === '/') {
                    // Replace the last operator with the new one
                    display.value = display.value.slice(0, -1) + keyValue;
                } else {
                    // Append the operator to the display
                    display.value += keyValue;
                }
            }
            // Handle numeric and decimal point buttons
            else {
                display.value += keyValue;
            }
        });
    });
});
