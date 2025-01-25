type Admin = {
  id: string | number;
  role: "ADMIN";
  permissions: {
    CreateUser: boolean;
    DeleteUser: boolean;
    UpdateUser: boolean;
  };
  fullAccess: boolean;
};

type Manager = {
  id: string | number;
  role: "MANAGER";
  permissions: {
    CreateUser: boolean;
  };
};

type Employee = Admin | Manager;
/**
 *
 * @param employee if we specify an employee role then we will get the employees defined type in return.
 * @returns in case of Admin, we will get the full access here, otherwise we will get the manager type without full access.
 * @example
 * manager = {
  id: 1,
  role: "MANAGER",
  permissions: {
    CreateUser: true,
  },
  }
  Admin = {
  id: 1,
  role: "ADMIN",
  permissions: {
    CreateUser: true,
    DeleteUser: true,
    UpdateUser: true,
  },
  fullAccess: true,}
 */
function defineRole(employee: Employee) {
  if (employee.role === "ADMIN") {
    console.log(employee.fullAccess);
  }
  if (employee.role === "MANAGER") {
    console.log(employee.permissions);
  }
  return employee;
}

const createAdmin = defineRole({
  id: 1,
  role: "ADMIN",
  permissions: {
    CreateUser: true,
    DeleteUser: true,
    UpdateUser: true,
  },
  fullAccess: true,
});

const createManager = defineRole({
  id: 1,
  role: "MANAGER",
  permissions: {
    CreateUser: true,
  },
});

console.log(createAdmin);
console.log(createManager);

type ErrorResponse = {
  statusCode: number;
  error: true;
  message: string;
};

type SuccessResponse = {
  statusCode: number;
  error: false;
  data: string;
};

type ApiResponse = ErrorResponse | SuccessResponse;

const handleResponse = (response: ApiResponse) => {
  if (response.error) {
    return {
      response: response.message,
      statusCode: response.statusCode,
    };
  } else {
    return { response: response.data, statusCode: response.statusCode };
  }
};

console.log(
  handleResponse({
    statusCode: 200,
    error: false,
    data: "Data fetched successfully",
  })
);
console.log(
  handleResponse({
    statusCode: 400,
    error: true,
    message: "Something went wrong",
  })
);
