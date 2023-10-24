function sortArrayDescending() {
    var input = prompt("Enter numbers separated by spaces:");
    
    if (input === null || input.trim() === "") {
        alert("Invalid input. Please enter numbers separated by spaces.");
        return;
    }
    
    var numbers = input.split(' ').map(Number);
    
    if (numbers.some(isNaN)) {
        alert("Invalid input. Please enter valid numbers.");
        return;
    }
    
    numbers.sort(function(a, b) {
        return b - a;
    });
    
    alert("Sorted array in descending order: " + numbers.join(' '));
}

// Call the function to get user input and sort the array
sortArrayDescending();
