"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function area(s) {
    switch (s.kind) {
        case "square":
            return s.size * s.size;
    }
}
