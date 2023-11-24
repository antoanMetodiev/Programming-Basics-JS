function suppliesForShool(input) { 
   let pensCount = Number(input[0]) * 5.80;
   let markersCount = Number(input[1]) * 7.20;
   let abstergentLiters = Number(input[2]) * 1.20;
   let percentDiscount = Number(input[3]);
   let allSum = markersCount + abstergentLiters + pensCount;
   allSum -= allSum * (percentDiscount / 100);
   console.log(allSum);
}

suppliesForShool(["4",
"2",
"5",
"13"]);