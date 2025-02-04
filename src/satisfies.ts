const universe = {
  sun: "star",
  sriius: "star",
  earth: { type: "planet", parent: "sun" },
};

// type key = keyof typeof universe;
// type untype = typeof universe;

const universe2 = {
  sun: "star",
  sirius: "star",
  earth: { type: "planet", parent: "sun" },
} satisfies { [key in 'sun' | 'sirius' | 'earth']:{type:string,parent:string}|string};


universe2.earth.type

export {};
