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

type User = {
  id: string | number;
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

type MestreyBox<T> = {
  value: T;
};

const numberBox: MestreyBox<number> = {
  value: 123,
};
const userBox: MestreyBox<User | null> = {
  value: {
    id: 1,
    firstName: "Jahir",
    lastName: "Jahir",
    email: "jahir@jahir",
    address: {
      street: "123 Main St",
      city: "New York",
      state: "NY",
      zip: "10001",
      country: "United States",
      coordinates: {
        latitude: 40.7128,
        longitude: -74.006,
      },
    },
    skills: [
      {
        name: "HTML",
        experience: 5,
      },
      {
        name: "CSS",
        experience: 4,
      },
    ],
    education: {
      degree: "Bachelor of Science in Computer Science",
      major: "Computer Science",
      phd: {
        degree: "Doctor of Philosophy in Computer Science",
        university: "University of Washington",
        graduationYear: 2021,
      },
    },
  },
};

if (userBox.value) {
  console.log(userBox.value.skills);
}

type ApiResponse<T> = {
  data: T;
  status: number;
  message: string;
};

async function fetchData(): Promise<ApiResponse<User>> {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  return {
    data,
    status: response.status,
    message: response.statusText,
  };
}

type Product = {
  id: number | string;
  name: string;
  price: number;
  quantity: number;
  category: string;
  description: string;
};

const fetchProducts = async (): Promise<ApiResponse<Product>> => {
  const response = await fetch("https://dummyjson.com/products/1");
  const data = await response.json();
  return {
    data,
    status: response.status,
    message: response.statusText,
  };
};

const fetchApi = async <T>(url: string): Promise<ApiResponse<T>> => {
  const response = await fetch(url);
  const data = await response.json();
  return {
    data,
    status: response.status,
    message: response.statusText,
  };
};

async function main() {
  const user = await fetchData();
  console.log(user.data);
}
main();

async function main2() {
  const product = await fetchProducts();
  console.log(product.data);
}
main2();

async function main3() {
  try {
    const UserReturn = await fetchApi<User>(
      "https://jsonplaceholder.typicode.com/users/1"
    );
    console.log(UserReturn.data.email, "User email");

    const ProductReturn = await fetchApi<Product>(
      "https://dummyjson.com/products/1"
    );
    console.log(ProductReturn.data?.["category"], "Category");
  } catch (error) {
    console.log(error);
  }
}

main3();
