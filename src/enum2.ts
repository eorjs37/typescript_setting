enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}

enum Direction1 {
  Up = 1,
  Down,
  Left,
  Right,
}

console.log(Direction1.Down);

enum Response {
  No,
  Yes,
}

function respond(recipient: string, message: Response) {
  //
}

respond("Princess Caroline", Response.No);

// enum E {
//   A = getValue(),
//   B,
// }

// function getValue() {
//   return 0;
// }

enum ShapeKind {
  Circle,
  Square,
}
interface Circle {
  kind: ShapeKind.Circle;
  radius: number;
}

interface Square {
  kind: ShapeKind.Square;
  sideLength: number;
}

//error
// let c:Circle = {
//     kind: ShapeKind.Square,
//     radius:100
// }
enum E {
  X,
  Y,
  Z,
}

function f(obj: { X: number }) {
  return obj.X;
}

f(E);

enum LogLevel {
  ERROR,
  WARN,
  INFO,
  DEBUG,
}

/**
 * 이것은 아래와 동일합니다. :
 * type LogLevelStrings = 'ERROR' | 'WARN' | 'INFO' | 'DEBUG';
 */

type LogLevelStrings = keyof typeof LogLevel;

function printImportant(key: LogLevelStrings, message: string) {
  const num = LogLevel[key];
  if (num <= LogLevel.WARN) {
    console.log("Log level key is: ", key);
    console.log("Log level value is: ", num);
    console.log("Log level message is: ", message);
  }
}
printImportant("ERROR", "This is a message");

type ty = keyof typeof LogLevel;
/*
ERROR : 0
WARN:1,
INFO : 2,
DEBUG : 3
*/
enum Enum {
  A,
}
let a = Enum.A;
let nameOfA = Enum[a];
export {};
