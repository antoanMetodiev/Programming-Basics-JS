function depositCalculator(input) {
    let depositSum = Number(input[0]);
    let termDepositInMonth = Number(input[1])  
    let annualInterestInPercent = Number(input[2]);
    
     let termForYear = (depositSum * annualInterestInPercent) / 100;
     let termForMonth = termForYear / 12; 
     let totalSum = depositSum + termDepositInMonth * termForMonth;
     console.log(totalSum);
}

depositCalculator(["2350",
"6",
"7"]);
