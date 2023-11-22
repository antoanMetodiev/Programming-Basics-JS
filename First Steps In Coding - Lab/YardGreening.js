function YardGreening(input){
    let greeningMeters = Number(input[0]);
    let priceForWholeGarden = greeningMeters * 7.61;
    let discount = priceForWholeGarden * 0.18;
    priceForWholeGarden-= discount;
    console.log(`The final price is: ${priceForWholeGarden} lv.`);
    console.log(`The discount is: ${discount} lv.`);
}

YardGreening(["550"])