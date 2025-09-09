declare module "@/utils/date" {
  declare function isPlayOK(data: string): boolean;
}

declare namespace myLib {
  function makeGreeting(s: string): string;
  let numberOfGreetings: number;
}
