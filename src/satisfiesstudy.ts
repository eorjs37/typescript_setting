const user = {
  id: 1,
  name: "Alice",
  role: "admin",
} satisfies {
  id: number
	name: string
	[key:string]:unknown
}

type PersonType = {
	id: number;
	name: string;
	[key:string]:unknown
}

const employee = {
	id: 5,
	name: "John",
	department: "Sales",
} satisfies PersonType

const COLORS = {
	red: "#ff0000",
  green: "#00ff00",
	blue: "#0000ff",
	text:"1"
} as Record<string,string>

export {};
