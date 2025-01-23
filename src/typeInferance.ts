//! Type Inference Documentation

//!Type inference is a feature in TypeScript where the compiler automatically deduces the types of variables, return values, and expressions based on the context, without explicitly specifying the type. This helps reduce the need for redundant type annotations, improving readability and developer efficiency.

//!Variable Initialization: Automatically infer the type based on the assigned value
/** 
let name = "Alice"; // TypeScript infers 'string'
let age = 25; // TypeScript infers 'number'
let isLoggedIn = true; // TypeScript infers 'boolean'

Trying to assign a value of a different type later will cause an error:
name = 42; // Error: Type 'number' is not assignable to type 'string'
*/

//! Function Return Type: Automatically infer the return types of a function based on the return statement.
/**
function add(a: number, b: number) {
  return a + b; // Return type inferred as 'number'
}

const result = add(5, 10); // 'result' is inferred as 'number'

console.log(result.toUpperCase()); // Error: Property 'toUpperCase' does not exist on type 'number'

*/

//! Array: TypeScript infers the array type based on its elements.

/**let numbers = [1, 2, 3]; // TypeScript infers 'number[]'
numbers.push(4); // Allowed
numbers.push("five"); // Error: Argument of type 'string' is not assignable to parameter of type 'number'
 */

//! Object: When assigning an object literal, TypeScript infers its shape.

/**
const user = {
  id: 1,
  name: "Alice",
  isActive: true,
}; // TypeScript infers { id: number; name: string; isActive: boolean }

user.isActive = false; // Allowed
user.age = 25; // Error: Property 'age' does not exist on type '{ id: number; name: string; isActive: boolean }'

 */

//! Contextual Typing in Callback: TypeScript infers the type of callback parameters based on context.

/**
const numbers = [1, 2, 3];
const doubled = numbers.map((num) => num * 2); // 'num' is inferred as 'number'

const invalid = numbers.map((num) => num.toUpperCase()); // Error: Property 'toUpperCase' does not exist on type 'number'
 */

//! Why Type Inference Matters?
/**
    ** Readability: Reduces clutter by eliminating unnecessary type annotations.
    ** Developer Efficiency: Saves time by not requiring explicit types for obvious cases.
    ** Error Prevention: Automatically enforces type safety based on inferred types.
    ** Scalability: In large codebases, consistent use of inference ensures fewer manual changes during refactoring.
    ** Fewer Bugs: Misaligned types are caught during development rather than at runtime.

 //! Best Practices for Using Type Inference:

    ** Trust TypeScript: Use inference where possible, but provide explicit types for:
    ** Public APIs
    ** Function parameters
    ** Complex or ambiguous types
    ** Combine with Explicit Types: Use type inference for local variables but provide types for more complex structures.
    ** Avoid any: Relying on inference discourages the use of the any type, improving type safety
 */

//! in type Inference we can declare a variable without saying the type of it , if there is a value in the variable. it will infer the type of it. if the variable contains string type, it can't be redeclare by the number type. as well as we can declare a array with values, and it will contain the same type as we declare in the variable. if the variable contains number array, it can only contain the numbers. if we use both number, string in the array, it can contain numbers and string in redeclaration. and if we use boolean in the array, it can contain boolean value only. and if we use object in the array, it can contain object value only.
/** 
const message = "Hello, World!";

const number = 42;

const isActive = true;

const array = [1, 2, 3, 4, 5, 6, 7, "a", "b", "c", "d", "e", true, false];

array.push("hello");
array.push(10);
array.push(true);

const messages = ["Hello", "World", "!"];
///////
const person = { name: "John Doe", age: 30 };

const flags = [true, false, false];

enum Role {
  ADMIN,
  USER,
  GUEST,
}

Type Annotation

console.log(array);

Type Infer

const user = {
  id: 1,
  name: "John Doe",
  age: 30,
};

function printUser(input: typeof user) {
  return "Name : " + input.name + "," + " Age : " + input.age;
}

console.log(printUser(user));

*/

//! Practical example of type inference

/**
 *
 * @param formData we declare the type in the function parameter because we don't declare the values in for the parameters.
 * @returns
 *
 * @example
 * validateForm({email: "foo@example.com, age: 30, isActive: true}) // true
 */
function validateForm(formData: {
  email: string;
  age: number;
  isActive: boolean;
}): boolean {
  const email: string = formData.email;
  const age: number = formData.age;
  const isActive: boolean = formData.isActive;

  if (email.includes("@") && age > 18) {
    return true;
  }
  return false;
}

console.log(
  validateForm({ email: "qVWYg@example.com", age: 20, isActive: true })
); // true

//! with type inference

/**
 *
 * @param formData we need to declare the type in input parameters just because we can't declare the values for input parameters.
 * @returns
 *
 * @example
 * validateForm2({ email: "qVWYg@example.com", age: 20, isActive: true }) // true
 */
function validateForm2(
  /* input type must needed because we didn't declare any value */ formData: {
    email: string;
    age: number;
    isActive: boolean;
  }
) {
  const { email, age, isActive } = formData;

  return email.includes("@") && age > 18;
}

console.log(
  validateForm2({ email: "qVWYg@example.com", age: 20, isActive: true }) // true
);
