"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LinkedList_1 = require("./LinkedList");
// const numbersCollection = new NumbersCollection([10, 3, -4, 0]);
// numbersCollection.sort();
// console.log(numbersCollection.data);
// const charactersCollection = new CharactersCollection("Xaayb");
// charactersCollection.sort();
// console.log(charactersCollection.data);
const linkedList = new LinkedList_1.LinkedList();
linkedList.add(500);
linkedList.add(-3);
linkedList.add(-10);
linkedList.add(8);
linkedList.sort();
console.log(linkedList.print());
