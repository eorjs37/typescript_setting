type Template = `template ${string}`;
let str: Template = "template ";
str = "template hello";
str = "template 123";
//str = "template";

type City = "seoul" | "suwon" | "busan";
type Vehicle = "car" | "bike" | "walk";

type ID = `${City}:${Vehicle}`;

const id: ID = "seoul:walk";

export {};
