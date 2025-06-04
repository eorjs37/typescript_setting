interface WithId {
  id: number;
}

interface User extends WithId {
  name: string;
}

const a: User = {
  id: 1,
  name: "dd",
};
export {};
