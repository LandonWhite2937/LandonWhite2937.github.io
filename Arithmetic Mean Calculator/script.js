let numbers = [];

function addValue() {
    let input = document.getElementById("numberInput").value;
    let num = parseFloat(input);
    
    if (isNaN(num)) {
        alert("Please enter a valid number.");
        return;
    }
    numbers.push(num);
    updateDisplay();
}

function removeValue() {
    let input = document.getElementById("numberInput").value;
    let num = parseFloat(input);
    
    if (isNaN(num)) {
        alert("Please enter a valid number.");
        return;
    }
    let index = numbers.indexOf(num);
    if (index === -1) {
        alert("Number not found in dataset.");
        return;
    }
    numbers.splice(index, 1);
    updateDisplay();
}

function computeMean() {
    if (numbers.length === 0) return "N/A";
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return (sum / numbers.length).toFixed(4);
}

function updateDisplay() {
    document.getElementById("dataset").textContent = JSON.stringify(numbers);
    document.getElementById("mean").textContent = computeMean();
}
