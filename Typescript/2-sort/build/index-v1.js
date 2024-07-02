"use strict";
// This sorter class should work with numbers, strings and linked-list.
// Problem for strings-> "X" > "a" is false in ascii for string and strings are immutable
class SorterV1 {
    constructor(collection) {
        this.collection = collection;
    }
    sort() {
        const length = this.collection.length;
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                if (this.collection instanceof Array) {
                    if (this.collection[j] > this.collection[j + 1]) {
                        const leftHand = this.collection[j];
                        this.collection[j] = this.collection[j + 1];
                        this.collection[j + 1] = leftHand;
                    }
                }
                if (typeof this.collection === "string") {
                }
            }
        }
    }
}
// const sorterv1 = new SorterV1([10, 3, -5, 0]);
// sorter.sort();
// console.log(sorter.collection);
