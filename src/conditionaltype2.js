"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function fetchData(type) {
    return type === "success"
        ? { data: "Fetched successfully", status: 200 }
        : { error: "Something went wrong", status: 400 };
}
const successResponse = fetchData("success");
const errorResponse = fetchData("error");
console.log(successResponse, errorResponse);
