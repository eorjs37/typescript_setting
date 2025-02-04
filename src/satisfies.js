"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
};
universe2.earth.type;
