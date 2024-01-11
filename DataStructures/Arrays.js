const strings = ["a", "b", "c", "d"];
// Arrays store the items sequentially in memory.

strings.push("e");
// O(1). The program already knows the memory location of the array. And it also knows the memory location of the last element.
// So it will be only 1 operation to add the element at the end of the array.

strings.pop(); // O(1). same reason as above.

strings.unshift("x"); // Adds item to the start.
// O(n). It adds the element to the beginning of the array. But it has to go through every element and re-assign the indices.

strings.splice(2, 0, "something"); // Adds item at the defined location.
// Here we are adding an element in the middle of array. And the program has to iterate from that location to re-assign the indices.
// Hence it is O(n/2) ==> O(n).

console.log(strings);
