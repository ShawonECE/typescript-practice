const addStrings = (num1: string, num2: string): string => {
    let sum: string = "";
    let num1Pos: number = num1.length - 1;
    let num2Pos: number = num2.length - 1;
    let carry: number = 0;

    while (num1Pos >= 0 || num2Pos >= 0) {
        let sumOfPos: number = 0;
        if (num1Pos >= 0) {
            sumOfPos += parseInt(num1[num1Pos]);
        }
        if (num2Pos >= 0) {
            sumOfPos += parseInt(num2[num2Pos]);
        }
        if (carry > 0) {
            sumOfPos += carry;
        }
        carry = 0;
        if (sumOfPos < 10) {
            sum = sumOfPos.toString() + sum;
        } else {
            sum = (sumOfPos % 10).toString() + sum;
            carry = 1;
        }

        num1Pos--;
        num2Pos--;
    }

    if (carry > 0) {
        sum = carry.toString() + sum;
    }

    return sum;
};