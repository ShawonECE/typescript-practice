"use strict";
function mySqrt(x) {
    let left = 0;
    let right = x;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (mid ** 2 === x) {
            return mid;
        }
        else if (mid ** 2 > x) {
            if ((mid - 1) ** 2 < x) {
                return mid - 1;
            }
            right = mid - 1;
        }
        else {
            if ((mid + 1) ** 2 > x) {
                return mid;
            }
            left = mid + 1;
        }
    }
    return -1;
}
;
