function generateOddSeriesBasedOnInput(a) {
    let result = [];
    let count = Math.ceil(a / 2) * 2 - 1; // Length of odd series
    for (let i = 1; i <= count; i += 2) {
        result.push(i);
    }
    return result.join(", ");
}


console.log("a = 1 =>", generateOddSeriesBasedOnInput(1)); 
console.log("a = 2 =>", generateOddSeriesBasedOnInput(2)); 
console.log("a = 3 =>", generateOddSeriesBasedOnInput(3)); 
console.log("a = 4 =>", generateOddSeriesBasedOnInput(4)); 
console.log("a = 5 =>", generateOddSeriesBasedOnInput(5)); 
console.log("a = 6 =>", generateOddSeriesBasedOnInput(6)); 