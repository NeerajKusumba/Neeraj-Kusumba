function countMultiples(inputList) {
    let result = {};

    // Initialize counters for 1 to 9
    for (let i = 1; i <= 9; i++) {
        result[i] = 0;
    }

    // Count how many numbers in the list are divisible by 1 through 9
    for (let num of inputList) {
        for (let divisor = 1; divisor <= 9; divisor++) {
            if (num % divisor === 0) {
                result[divisor]++;
            }
        }
    }

    return result;
}


const input = [1, 2, 8, 9, 12, 46, 76, 82, 15, 20, 30];
console.log(countMultiples(input));