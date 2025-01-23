const numbers: number[] = [1.11111, 2.22222, 3.33333, 4.44444, 5.55555];

numbers.forEach((number) => console.log(number.toFixed(2)));

const numbers2: number[] = numbers.map((number) => number * 2);

console.log(numbers2);

const numberStr: string[] = numbers.map((number) => number.toFixed(2));

console.log("numberStr :", numberStr);
