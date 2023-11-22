function PetShop(input){
    let dogFoodPrice = Number(input[0]) * 2.50;
    let carFoodPrice= Number(input[1]) * 4;
    let totalSum = dogFoodPrice + carFoodPrice;
    console.log(totalSum + " lv.");
}

PetShop(["5", "4"]);