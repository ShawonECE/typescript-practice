let myFunc: (x: number, y: number) => number;

myFunc = (a, b) => {
    return a + b;
};

const user: {
    firstName: string;
    lastName: string;
    id?: 25;
    institute: string;
} = {
    firstName: "Shahriar",
    lastName: "Shawon",
    id: 25,
    institute: "Khulna University"
};

console.log(myFunc(2, 4));
console.log(user);