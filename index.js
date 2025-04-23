const display = document.getElementById("display");
let calculated = false;

function appendtodisplay(input) {
    if (calculated && !isNaN(input)) {
        display.value = "";
    }
    display.value += input;
    calculated = false;
}

function cleardisplay() {
    display.value = "";
    calculated = false;
}

function calculate() {
    try {
        let result = eval(display.value);
        display.value = Number(result).toFixed(4);
        calculated = true;
    } catch {
        display.value = "Error";
        calculated = false;
    }
}
