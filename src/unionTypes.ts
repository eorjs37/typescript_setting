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
    swim() {
      console.log("Swimming");
    },
    layEggs() {
      console.log("Laying eggs");
    },
  };
}

let pet = getSmallPet();
pet.layEggs();
//padLeft("HELLO WORLD", true); // 런타임에 오류
export {};
