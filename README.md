# Data structures and Algorithms
## What is Good Code?
### Readable 📖
- Is your code clean and others understands it.
### Scalable 📈
- Speed: Does the code does not lag and perform well when inputs increase? How fast is our code? How many operations that it's gonna cost?
  - We can calculate this using BIG O (Time complexity).
- Memory: How much memory does the code take? It's not good to use lots of memory.
  - Space Complexity
### Pillars of Programming
What makes a code best?
- Readable
- Speed - Time complexity
- Memory - Space complexity

Generally, there is a trade off between Speed and Memory. If you want the program to run faster, you must burn extra memory. If you want it to be memory efficient, you must sacrifice with Speed.  
Sometimes Readability may be more important than Scalability. Sometimes Time complexity is important than Space Complexity. Choose wisely.  
**Premature optimization is the root of all evil 😈**  

## BIG O 😲:
- There are many ways to solve a problem through code. Both efficient and inefficient ways.
- BIG O notation is used to measure the idea of scalable. Code that can scale.
- BIG O Cheatsheet: https://zerotomastery.io/cheatsheets/big-o-cheat-sheet/?utm_source=udemy&utm_medium=coursecontent
- Data Strcutures, Algorithms and their BIG Os: https://www.bigocheatsheet.com/
- ⭐**ALGORITHMIC EFFICIENCY**: When we go bigger and bigger with the input, how much does the algorithm slows down? The lesser the better 💪

The time it takes for a program to run varies depending on the system configuration. So, how can we measure if the code is efficient? And what is a scalable code (the code does not lag and perform well when inputs increase)
- Big O notation is language we use to compare how long an anglorithm takes to run.
- Compare algorithms and say which one is better regardless of computer differences.

### O(n)
Linear time. As inputs increase, the operations increase linearly (proportionally).  
3 items -> 3 operations, 4 items -> 4 operations, .... n items -> n operations  
Exercise 1: [https://replit.com/@nvnsyaswanth/ds-algo#BigO/BigOExercises.js:2:21](https://replit.com/@nvnsyaswanth/ds-algo#BigO/BigOExercises.js:2:21)  
Exercise 2: [https://replit.com/@nvnsyaswanth/ds-algo#BigO/BigOExercises.js:2:21](https://replit.com/@nvnsyaswanth/ds-algo#BigO/BigOExercises.js:19:28)  

### O(1)
Constant time. No matter how big the input is, there is only 1 operation.   
Even if we have O(2), O(3), O(10), O(100) -> Always represent constant time and considered O(1) 

### Rules to calculate Big O
#### Rule 1: Worst Case
We always care about the worst case scenario.  
If the item we're looking for is at the start of array, we cannot assume it to be O(1) since we found it in 1 iteration. We should always consider the worst case i.e. what if the item is at the end of the list. Then, it becomes O(n).  

#### Rule 2: Remove Constants
We don't really care about the constants in an Big O notation.  
If there are some steps which completes in 1 step and does not depend on the supplied input, we can drop the constants.  
O(1 + n/2 + 100) -> Finally can be considered as O(n)  
O(2n) -> Two for loops on two steps. Even in this case, we consider it an O(n)  

#### Rule 3: Different terms for inputs
Most Trickiest part
Just becase you see two for loops one after the other in separate steps, doesn't mean it will always be O(n)  

```
function compress(list1, list2) {
  list1.forEach(function (item) {
    console.log(item);
  });

  list2.forEach(function (item) {
    console.log(item);
  });
}
```
In the above code, lot of people get confused and assume Big O as O(n + n) -> O(n). But it actually is **'O(n + m)'** we get different terms for different inputs.

#### Rule 4: Drop Non-Dominant terms
This rule states that we care about the most important term in the Big O. Consider below example.  

```
function printAllNumbersThenAllPairSums(numbers) {
  console.log("these are the numbers:");
  numbers.forEach(function(number) {
    console.log(number);
  }); **// O(n)**

  console.log("and these are their sums:");
  numbers.forEach(function(firstNumber) {
    numbers.forEach(function(secondNumber) {
      console.log(firstNumber + secondNumber);
    });
  }); **// Nested for loop -> O(n^2)**
}

**// Overall Big O -> O(n + n^2)**
```
Overall Big O is **O(n + n^2)**. But as inputs increase, the value of _n^2_ will be significantly higher than _n_. So we can drop that part and our final Big O becomes **O(n^2)**.  
Overall Big O -> **O(n + n^2) -> O(n^2)**.  

### O(log n)
Searching algorithms
### O(n log n)
Sorting algorithms
### O(n^2)
Quadratic time. Nested Loops.  
Log all pairs of array. What is the Big O of below?
```
function logAllPairs(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      console.log(`pair (${array[i]}, ${array[j]})`);
    }
  }
}
```
Rule of thumb:  
- If we have two for loops one after another, it's an addition **O(n + n) -> O(2n) -> O(n)**
- If we have nested loops as above it becomes a multiplication **O(n * n) - > O(n^2)**

### O(2^n)
Recursive algorithms
### O(n!)
We add a nested loop for every input we have.
The most expensive. Mostly we don't encounter this because of it's complexity.

## What can cause time in a function?
- Operations (+, -, *, /)
- Comparisons (=, <>, !=)
- Looping (for, while)
- Outside function call (function())

## Space complexity:
When a program executes, it has two ways to remember things
- Heap: Store variables
- Stack: Keep track of function calls 

Very similar to how we calculate time complexity. We look at the variables we are using and determine.  

What causes Space complexity?
- Variables
- Data structures
- Function call
- Allocations

When we talk about **Space Complexity**, we **DON'T** really care much **about the memory of the input** that we pass, **_we talk about the extra space it consumes._**  

```
// Space complexity O(1)
function boooo(n) {
  for (let i = 0; i < n; i++) {
    console.log("booooo");
  }
}
```
We only have 1 variable i. So, O(1).  

```
// #6 Space complexity O(n)
function arrayOfHiNTimes(n) {
  var hiArray = [];
  for (let i = 0; i < n; i++) {
    hiArray[i] = "hi";
  }
  return hiArray;
}
```
We have 1 variable and a data strcuture. We're allocating memory every time we assign "hi" to an item in array. So, the Big O would be **O(1 + n) => O(n).**  

## Data Structures:
A data structure is a collection of values. Each one is good and is specialized for it's own thing.  
We have a ton of data strcutures. But there are a handful which we generally use.  
1. Arrays
2. Hash Tables
3. Linked Lists
4. Stacks
5. Queues
6. Trees
7. Tries
8. Graphs

There are two parts to understand a data structure:
1. How to build one?
2. How to use it?

Based on scenario, we need to pick the data structures wisely.  

Programs tend to access memory that is nearby. The closer the data is to the CPU and the less they have to travel between memory addresses in a RAM, the faster the program can run. To further optimize this, the CPU has a cache (LRU cache, L1 cache) which maintains the very very recent data.  

Mind map 🧠: https://coggle.it/diagram/W5E5tqYlrXvFJPsq/t/master-the-interview-click-here-for-course-link/c25f98c73a03f5b1107cd0e2f4bce29c9d78e31655e55cb0b785d56f0036c9d1

**Why is this important for Data Structures?**
Data Structures are ways to store information.  

``` var a = 1 ``` occupies 4 memory addresses in an 32-bit system (1 memory address stores 8 bits).  
``` var b = 4 ``` occupies the next 4 memory addresses in an 32-bit system (1 memory address stores 8 bits).  
Know more here: https://www.geeksforgeeks.org/difference-32-bit-64-bit-operating-systems/

Some data structures in RAM are organized right next to each other. Some are organized apart from each other. And they have different Pros and Cons.

Our Goal 🎯: Minimize the operations that we need to do for the CPU to read/write information.  

Operations on Data structure:
1. Insertion
2. Deletion
3. Traversal
4. Searching
5. Sorting
6. Access

Each data strcuture have their own PROs and CONs for each one of the operations.  

### Arrays:
- Sometimes called lists
- Organizes items sequentially in memory
- Simplest and most widely used
- Have least amount of rules
- As they are stored in order, they have the smallest footprint
- Use when you want to store some data and iterate over it step by step
  - lookup: O(1)
  - push: O(1)
  - insert: O(n)
  - delete: O(n)

``` const strings = ['a', 'b', 'c', 'd']; ```  
As arrays store items sequentially in memory, each item in the above array occupy 4 memory locations. 'a' occupies 4 locations and the next 4 memory locations are immediately occupied by 'b'.  
So, it becomes easier to access the items when we know the index. That's the reason for **lookup and push**, we have O(1).  

``` 
strings.push("e"); 
// O(1). The program already knows the memory location of the array. And it also knows the memory location of the last element.
// So it will be only 1 operation to add the element at the end of the array.

strings.unshift("x"); // Adds item to the start.
// O(n). It adds the element to the beginning of the array. But it has to go through every element and re-assign the indices.

strings.splice(2, 0, "something"); // Adds item at the defined location.
// Here we are adding an element in the middle of array. And the program has to iterate from that location to re-assign the indices.
// Hence it is O(n/2) ==> O(n).
```