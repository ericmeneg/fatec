"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pessoa_1 = __importDefault(require("./pessoa"));
const pessoa1 = new pessoa_1.default('persona1', 20, ['Beber agua', 'comer comida', 'respirar ar']);
console.log(pessoa1);
