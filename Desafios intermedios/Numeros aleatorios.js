let generatedNumbers = {}

function generateRandomNumber(min, max) { 
    
    for (let i = 0; i < 10000; i++) {
        let number = Math.floor(Math.random() * (max - min + 1)) + min;

        if (generatedNumbers[number]) {
            generatedNumbers[number]++;
        } else {
            generatedNumbers[number] = 1;
        }
    }
    return generatedNumbers
}

console.log(generateRandomNumber(1,20));
