/**
 * Typed Parameters - a function can get types from parameters when you want to define a function.
 * Typed Return Values - Types can be defined for return .
 * Optional Parameters - Parameters types can be optional for the function somewhere.
 * Default Value - Some default parameters types can be defined for the function.
 * Rest Parameters - rest parameters types can be defined for the function.
 */

// When you define a function you can define types in the parameters and define the return type. if we define string parameters and string return type, it won't be execute if we pass a number in the parameter and the return type.

/**
 * This function takes two string parameters and returns a string .
 * @param a - The First parameter should be a string
 * @param b - The Second parameter should be a string
 * @returns - This will return the string
 *
 * @example
 * conCat("hello ", "world") // "hello world"
 */
function conCat(a: string, b: string): string {
  return a.concat(b);
}

console.log(conCat("Hello, ", "World!"));

// this function will not be executed because the function parameter and the return type is number, and we are returning the string return type instead of the number return type. here toFixed returns the string return type.

/**
 * This Function will takes two numbers in the parameter and returns the string
 * @param a - The first parameter should be a number
 * @param b - The second parameter should be a number
 * @returns  Function will return the string
 *
 * @example
 * add(2.2222, 3.3333) // "5.55"
 */
function add(a: number, b: number): string {
  return (a + b).toFixed(2);
}

console.log(add(2.222, 3.333));

/**
 * The function will take two numbers in the parameter and return the number
 * @param a  The first parameter should be a number
 * @param b  The second parameter should be a number
 * @returns  Function will return the number
 *
 * @example
 * add(2, 3) // 5
 */
function add2(a: number, b: number): number {
  return a + b;
}

console.log(add2(2, 3));

// Optional Parameters and Default Values

// in the parameter , we use the default value for message and thats why message parameter is now optional parameter because we use the default value. we can pass a value when call it or may be use the default one.

/**
 *
 * @param name This parameter will takes the string as input
 * @param message This parameter is optional and if we want to use it we can set a value custom otherwise it will use the default value
 * @returns this will return both string as a message.
 *
 * @example
 * greet("Jahir") // "Hello Jahir!, Welcome To Typescript"
 * greet("Jahir", "Welcome Back") // "Hello Jahir!, Welcome Back"
 */
function greet(name: string, message: string = "Welcome To Typescript") {
  return console.log(`Hello ${name}!, ${message}`);
}

greet("Jahir");
greet("Jantu", "Welcome Back");
