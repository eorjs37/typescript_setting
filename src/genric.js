"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function values(initial) {
    return {
        hasValue(value) {
            return initial.includes(value);
        },
    };
}
const savedValues = values(["a", "b", "c"]);
savedValues.hasValue("x");
const musicFactoryE = (name, musicId) => ({
    type: "music",
    color: "black",
    name,
    musicId,
});
const test = musicFactoryE("music", 12);
