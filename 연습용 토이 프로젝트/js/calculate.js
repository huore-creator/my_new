const buttons = document.querySelectorAll('.buttons button');
const display = document.getElementById('display');

let currentExpression = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        switch(button.className) {
            case 'ac':
                currentExpression = '';
                break;
            case 'operator':
            case 'numBtn':
                currentExpression += button.textContent;
                break;
            case 'result':
                try {
                    const result = eval(currentExpression); // Note: Using eval() can be dangerous
                    currentExpression = result.toString();
                } catch (error) {
                    console.error(error);
                    currentExpression = '';
                }
                break;
        }
        display.value = currentExpression;
    });
});