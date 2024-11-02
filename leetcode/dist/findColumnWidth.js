"use strict";
const transpose = (matrix) => {
    const rows = matrix.length;
    const cols = matrix[0].length;
    const transpose = [];
    for (let i = 0; i < cols; i++) {
        const newRow = [];
        for (let j = 0; j < rows; j++) {
            newRow.push(matrix[j][i]);
        }
        transpose.push(newRow);
    }
    return transpose;
};
function findColumnWidth(grid) {
    const ans = [];
    const transposed = transpose(grid);
    for (const row of transposed) {
        let maxLength = 0;
        for (const num of row) {
            let string = num.toString();
            maxLength = Math.max(maxLength, string.length);
        }
        ans.push(maxLength);
    }
    return ans;
}
;
