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
export {};
