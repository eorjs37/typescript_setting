// Record
// Key,Value형태 이며, Key,value에 타입을 지정할 수 있다
interface PageValue {
  title: string;
}

type PageKey = "home" | "about" | "contact";
const nav: Record<PageKey, PageValue> = {
  contact: { title: "t1" },
  about: { title: "t2" },
  home: { title: "t3" },
};

// Omit
// Type에서 원하는 키 값을 제거하는 기능
interface Person {
  name: string;
  age: number;
  country: string;
  gender: "m" | "w";
  likefood: string;
}

type KoreaPerson = Omit<Person, "likefood">;

export {};
