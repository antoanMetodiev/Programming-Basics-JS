function sumOfNumbers(input) {
    let number = input[0];

    let digitsSum = 0;
    for (let i = 0; i < number.length; i++) {
        let digit = Number(number[i]);
        digitsSum += digit;
    }
    console.log("The sum of the digits is:" + digitsSum);
}

sumOfNumbers(["1234"]);