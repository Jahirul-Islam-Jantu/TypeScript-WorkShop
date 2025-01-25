function something<T>(value: T): T {
  console.log(value, typeof value);

  return value;
}

something<number>(123);
something<string>("123");
something<boolean>(true);

function mergeObjects<T, U>(obj1: T, obj2: U): T & U {
  return { ...obj1, ...obj2 };
}

const merge = mergeObjects(
  { name: "Jahir", ID: 1, age: 32 },
  { address: "Dhaka", profession: "Developer" }
);
const merge2 = mergeObjects({ a: 1, b: 2 }, { c: 3, d: 4 });

console.log(merge);

console.log(merge2);
