/////////////Kalkylator Projektet/////////7
document.addEventListener('DOMContentLoaded', function() {

    //Hämtar display  elementet mha getElementById
    var display = document.getElementById('display');
    //Nu input
    var currentInput = '';
    //Förra input
    var previousInput = '';
    //null värde för operation(ska användas senare i funktioner)
    var operation = null;

    //lägger tal eller decimal till displayen
    function appendToDisplay(number) {
        if (number === '.' && currentInput.includes('.')) return;
        currentInput += number;
        display.value = currentInput;
    }

    //Funktionen för matematiska operation.
    function chooseOperation(op) {
        // Om ingen nuvarande inmatning, returnera
        if (currentInput === '') return;
        // Om det redan finns en föregående inmatning, utför beräkning
        if (previousInput !== '') {
            compute();
        } else {
            previousInput = currentInput;
        }
        operation = op;
        currentInput = '';
    }

    // Utför beräkning baserat på vald operation
    function compute() {
        var computation;
        var prev = parseFloat(previousInput);
        var current = parseFloat(currentInput);
        //Utför beräkningen mha switch
        switch (operation) {
            case '+':
                computation = prev + current;
                break;
            case '-':
                computation = prev - current;
                break;
            case '*':
                computation = prev * current;
                break;
            case '/':
                computation = prev / current;
                break;
            default:
                return;
        }
        currentInput = computation.toString();
        operation = null;
        previousInput = '';
        display.value = currentInput;
    }

    // Utför beräkning och uppdatera displayen
    function calculate() {
        if (operation !== null) {
            compute();
        }
        display.value = currentInput;
    }

    //Rensar displayen och återställer variabler.
    function clearDisplay() {
        currentInput = '';
        previousInput = '';
        operation = null;
        display.value = '';
    }

    //Tar bort sista talet från displayen
    function deleteLastInput() {
        currentInput = currentInput.toString().slice(0, -1);
        display.value = currentInput;
    }

    // Gör så att funktioner anropas via HTML.
    window.appendToDisplay = appendToDisplay;
    window.chooseOperation = chooseOperation;
    window.calculate = calculate;
    window.clearDisplay = clearDisplay;
    window.deleteLastInput = deleteLastInput;
});