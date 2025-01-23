enum Level {
  NOVICE,
  INTERMEDIATE,
  ADVANCED,
  MATER,
}

function whatIsYourLeven(level: Level) {
  console.log(Level[level]);
}

const myLevel = Level.ADVANCED;
whatIsYourLeven(myLevel);

enum MONEY {
  WON,
  DOLLAR,
}
MONEY.WON;
MONEY[MONEY.WON];
export {};
