function generateOddSeries(n) {
    let result = [];
    for (let i = 0; i < n; i++) {
        result.push(2 * i + 1);
    }
    return result.join(", ");
}


console.log("Output:", generateOddSeries(1)); 
console.log("Output:", generateOddSeries(2)); 
console.log("Output:", generateOddSeries(3)); 
console.log("Output:", generateOddSeries(4)); 
console.log("Output:", generateOddSeries(5)); 