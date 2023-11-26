function bonusScore(input) {
    let beginScore = Number(input[0]);
    let bonusScore = 0;
    if (beginScore <= 100) {
        bonusScore = 5;
    } else if (beginScore > 100 && beginScore <= 1000) {
        bonusScore = beginScore * 0.20;
    } else if (beginScore > 1000) {
        bonusScore = beginScore * 0.10;
    }

    if (beginScore % 2 == 0) {
        bonusScore++;
    } else if (beginScore % 10 == 5){
        bonusScore += 2;
    }
    console.log(bonusScore);
    console.log(beginScore + bonusScore);
}

bonusScore(["2703"]);