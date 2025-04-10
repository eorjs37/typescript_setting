function padLeft(value: string, padding: string | number) {
  if (typeof padding === "number") {
    return Array(padding + 1).join(" ") + value;
  }

  if (typeof padding === "string") {
    return padding + value;
  }

  throw Error(`Expected string or number, got ${padding}`);
}

interface Bird {
  fly(): void;
  layEggs(): void;
}

interface Fish {
  swim(): void;
  layEggs(): void;
}

function getSmallPet(): Fish | Bird {
  return {
    layEggs() {},
    swim() {},
  };
}

let pet = getSmallPet();

if ((pet as Bird).fly) {
  (pet as Bird).fly();
}

/* 사용자-정의 타입 가드 (User-Defined Type Guards)  */

// 타입 서술어 사용하기
function isFish(pet1: Fish | Bird): pet1 is Fish {
  return (pet1 as Fish).swim !== undefined;
}

if (isFish(pet)) {
  pet.swim();
} else {
  pet.fly();
}

// in 연산자 사용하기
function move(pet: Fish | Bird) {
  if ("swim" in pet) {
    return pet.swim();
  }
  return pet.fly();
}

// instanceof 타입 가드
interface Padder {
  getPaddingString(): string;
}

class SpaceRepeatingPadder implements Padder {
  constructor(private numSpaces: number) {
    this.numSpaces = numSpaces;
  }
  getPaddingString(): string {
    return Array(this.numSpaces + 1).join(" ");
  }
}

class StringPadder implements Padder {
  constructor(private value: string) {}
  getPaddingString() {
    return this.value;
  }
}

function getRandomPadder() {
  return Math.random() < 0.5
    ? new SpaceRepeatingPadder(4)
    : new StringPadder("  ");
}

// 타입은 'SpaceRepeatingPadder | StringPadder' 입니다
let padder: Padder = getRandomPadder();

if (padder instanceof SpaceRepeatingPadder) {
  padder;
}

if (padder instanceof StringPadder) {
  padder;
}

// 타입 가드와 타입 단언 (Type guards and type assertions)

function f(sn: string | null): string {
  if (sn == null) {
    return "default";
  } else {
    return sn;
  }
}

export {};
