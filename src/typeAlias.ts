import { default as User } from "./user.json";

type ID = number | string;

// type User = {
//   id: ID;
//   firstName: string;
//   lastName?: string;
//   skills: string[];
// };

// // Using Type Annotations directly, you will need to provide as It is
// // function createUser(firstName: string, lastName?: string) {
// //   const user: User = {
// //     id: crypto.randomUUID(),
// //     firstName,
// //     lastName,
// //     skills: [],
// //   };

// //   return user;
// // }

// // type assertions by satisfies means You must provide the User type data and then you can use more data if you need to . mostly use for database requests. when you satisfy the User , you can have more data.
// function createUser2(firstName: string, lastName?: string) {
//   const user = {
//     id: crypto.randomUUID(),
//     firstName,
//     lastName,
//     skills: [],
//   } satisfies User;

//   return user;
// }

// console.log(createUser2("John", "Smith"));

// //as type is the type where you are asking the function to take the data provided as it is.
// function createUser3(firstName: string, lastName?: string) {
//   const user = {
//     id: crypto.randomUUID(),
//     firstName,
//     lastName,
//     skills: [],
//   } as User;

//   return user;
// }

// console.log(createUser3("John", "Smith"));

// // Using Type Aliases by returning the types we want to return.
// function createUser4(firstName: string, lastName?: string): User {
//   return {
//     id: crypto.randomUUID(),
//     firstName,
//     lastName,
//     skills: [],
//   };
// }

// console.log(createUser4("John", "Smith"));

type UserSchema = {
  id: ID;
  firstName: string;
  lastName: string;
  email: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
    country: string;
    coordinates: {
      latitude: number;
      longitude: number;
    };
  };
  skills: {
    name: string;
    experience: number;
  }[];
  education: {
    degree: string;
    major: string;
    phd: {
      degree: string;
      university: string;
      graduationYear: number;
    };
  };
};
type Address = UserSchema["address"];
type Position = Address["coordinates"];

function printUser(user: UserSchema) {
  // console.log(user["address"]["coordinates"]);
}

const Education = User["education"];
// console.log(User.skills);

function createUser(user: UserSchema): UserSchema {
  return {
    id: crypto.randomUUID(),
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    address: user.address,
    skills: user.skills,
    education: user.education,
  };
}

// console.log(createUser());

// console.log(User);

const user = JSON.parse(JSON.stringify(User)) as UserSchema;

console.log(user);

const printUserSkills = (skills: UserSchema["skills"]) => {
  return skills.map((skill) => skill.name);
};

console.log(printUserSkills(user.skills));
