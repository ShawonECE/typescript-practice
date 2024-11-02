"use strict";
const isPrime = (num) => {
    if (num === 1)
        return false;
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
};
const diagonalPrime = (nums) => {
    let max = 0;
    const length = nums.length;
    for (let i = 0; i < length; i++) {
        if (isPrime(nums[i][i])) {
            max = Math.max(max, nums[i][i]);
        }
        if (isPrime(nums[i][length - i - 1])) {
            max = Math.max(max, nums[i][length - i - 1]);
        }
    }
    return max;
};
