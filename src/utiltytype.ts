// - Partial<T>
interface Todo {
  title: string;
  description: string;
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate };
}

const todo1: Todo = {
  title: "test1",
  description: "desc1",
};

const todo2 = updateTodo(todo1, { title: "test" });

// - Readonly<T>
interface Music {
  title: string;
  album: string;
}

const music: Readonly<Music> = {
  title: "title",
  album: "album",
};
// error
// music.album =''

// Record<K,T>
interface ChannelInfo {
  channelId: string;
  channelUrl: string;
}

type Page = "main" | "curation" | "other";

const x: Record<Page, ChannelInfo> = {
  main: { channelId: "channel1", channelUrl: "~~" },
  curation: { channelId: "channel1", channelUrl: "~~" },
  other: { channelId: "channel1", channelUrl: "~~" },
};

// - Pick<T,K>
interface CurationInfo {
  period: string[];
  target: Array<number>;
  genre: Array<string>;
  color: number;
}

type PickPeriod = Pick<CurationInfo, "period">;
const period: PickPeriod = {
  period: ["1", "2"],
};

// - Omit<T,K>
type OmitGenre = Omit<CurationInfo, "period" | "target" | "color">;
// genre

// Exclude<T,U>
type ExcludeGenre = Exclude<"a" | "b" | "c", "a">;

// Extract<T,U>
type ExtractType = Extract<"a" | "b" | "c", "a">;

// NonNullable<T>
type NonNull1 = NonNullable<string | number | null | undefined>;

declare function f1(arg: { a: number; b: number }): void;
type PType0 = Parameters<() => string>;
type PType1 = Parameters<(s: string) => void>;
type PType2 = Parameters<<T>(arg: T) => T>; // [unknown]

// ConstructorParameters<T>
type T0 = ConstructorParameters<ErrorConstructor>;
type T1 = ConstructorParameters<FunctionConstructor>; // string[]
type T2 = ConstructorParameters<RegExpConstructor>;

// ReturnType<T>
declare function f1(): { a: number; b: number };
type ReturnTypeT1 = ReturnType<() => string>;
type ReturnTypeT2 = ReturnType<(s: string) => void>;
type ReturnTypeT3 = ReturnType<<T>() => T>;

class C {
  x = 0;
  y = 0;
}

type InstanceType1 = InstanceType<typeof C>;
type InstanceType2 = InstanceType<any>;
export {};
