function sequence2kPkus1(input) {
    let n = Number(input[0]);
    let theNumber = 1;
    while (theNumber <= n) {
        console.log(theNumber);
        theNumber = (theNumber * 2) + 1;
    }
}

sequence2kPkus1(["31"]);
