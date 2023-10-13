let outputScreen = document.getElementById('output-screen');

// Display num in the calculator screen
function display(num) {
    outputScreen.value += num;
}

// Calculate value of num 
// Alert if invalid
function Calculate() {
    try {
        outputScreen.value = eval(outputScreen.value);
    } catch (err) {
        alert('Invalid')
    }
}
 
// Clear output screen
function Clear() {
    outputScreen.value = '';
}

// Delete values from output screen
function del() {
    outputScreen.value = outputScreen.value.slice(0, -1);
}
