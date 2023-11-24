function fishTank(input) {
    let lengthInCm = Number(input[0]);
    let widthInCm = Number(input[1]);
    let heightInCm = Number(input[2]);
    let percent = Number(input[3]);

    let aquarium = (lengthInCm * widthInCm * heightInCm)
    aquarium -= aquarium * (percent / 100);
    aquarium /= 1000;
    console.log(aquarium);
}

fishTank(["105 ",
"77 ",
"89 ",
"18.5 "]);