"use strict";
const binaryStringToHexString = (binaryStr) => {
    if (binaryStr.length % 4 !== 0) {
        let zeros = 4 - (binaryStr.length % 4);
        for (let i = 0; i < zeros; i++) {
            binaryStr = '0' + binaryStr;
        }
    }
    const partitions = [];
    for (let i = 0; i < binaryStr.length; i += 4) {
        partitions.push(binaryStr.slice(i, i + 4));
    }
    const hex = [];
    for (const partition of partitions) {
        let num = 0;
        for (let i = 0; i < partition.length; i++) {
            let reversePosition = Math.abs(i + 1 - partition.length);
            num = num + parseInt(partition[i]) * 2 ** reversePosition;
        }
        if (num < 10) {
            hex.push(num.toString());
        }
        else {
            hex.push(String.fromCharCode(num + 87));
        }
    }
    return hex.join('');
};
const twosCompliment = (number, bit) => {
    number = number * (-1);
    const binary = number.toString(2).padStart(bit, '0');
    let inverted = '';
    for (let char of binary) {
        inverted += char === '0' ? '1' : '0'; // Flip bits
    }
    const compliment = (parseInt(inverted, 2) + 1).toString(2);
    return compliment;
};
const toHex = (num) => {
    if (num < 0) {
        const compliment = twosCompliment(num, 32);
        return binaryStringToHexString(compliment);
    }
    else {
        let result = '';
        while (num > 0) {
            let remainder = num % 16;
            num = Math.floor(num / 16);
            result = remainder < 10 ? (remainder.toString() + result) : String.fromCharCode(remainder + 87) + result;
        }
        return result;
    }
};
