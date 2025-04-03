// 인터섹션 : 합집합

function extend<First, Second>(first: First, second: Second): First & Second {
  const result: Partial<First & Second> = {};
  for (const prop in first) {
  }

  return result as First & Second;
}

class Person {
  constructor(name: string) {}
}

interface Loggable {
  log(name: string): void;
}

class ConsoleLogger implements Loggable {
  log(name: string): void {
    throw new Error("Method not implemented.");
  }
}

export {};
