const luckyNumbers = (matrix: number[][]): number[] => {
    const minInRows: Set<number> = new Set<number>();;
    const maxInCols: Set<number> = new Set<number>();;
    const rowLength = matrix.length;
    const colLength = matrix[0].length;
    const lucky: number[] = [];

    // for (let i = 0; i < rowLength; i++) {
    //     const minimum = Math.min(...matrix[i]);
    //     minInRows.add(minimum);
    // }

    for (let j = 0; j < colLength; j++) {
        const colElements: number[] = [];
        for (let i = 0; i < rowLength; i++) {
            colElements.push(matrix[i][j]);
            const minimum = Math.min(...matrix[i]);
            minInRows.add(minimum);
        }
        const maximum = Math.max(...colElements);
        maxInCols.add(maximum);
    }

    for (const element of minInRows) {
        if (maxInCols.has(element)) {
            lucky.push(element);
        }
    }
    return lucky;
};