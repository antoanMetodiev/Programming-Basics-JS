function basketballEquipment(input) {
    let yearFee = Number(input[0]);

    let sneakers = yearFee * 0.60;
    let outfit = sneakers * 0.80;
    let ball = outfit / 4;
    let accessories = ball / 5;
    let allSum = yearFee + sneakers + outfit + ball + accessories;
    console.log(allSum);
}

basketballEquipment(["365 "]);