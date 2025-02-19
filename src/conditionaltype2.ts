type ApiResponse<T> = T extends "success"
  ? { data: string; status: 200 }
  : {
      error: string;
      status: 400;
    };

function fetchData<T extends "success" | "error">(type: T): ApiResponse<T> {
  return type === "success"
    ? ({ data: "Fetched successfully", status: 200 } as ApiResponse<T>)
    : ({ error: "Something went wrong", status: 400 } as ApiResponse<T>);
}

const successResponse = fetchData("success");
const errorResponse = fetchData("error");
console.log(successResponse, errorResponse);

//유틸리티 타입
type Nullable<T> = T extends object
  ? { [K in keyof T]: T[K] | null }
  : T | null;
//
type User = {
  name: string;
  age: number;
};
type NullableUser = Nullable<User>;
type NullableString = Nullable<string>; // string | null
export {};
