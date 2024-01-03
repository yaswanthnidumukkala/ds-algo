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

## BIG O 😲:
- There are many ways to solve a problem through code. Both efficient and inefficient ways.
- BIG O notation is used to measure the idea of scalable. Code that can scale.
- BIG O Cheatsheet: https://zerotomastery.io/cheatsheets/big-o-cheat-sheet/?utm_source=udemy&utm_medium=coursecontent
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

When we talk about Space Complexity, we don't really care much about the memory of the input that we pass, **_we talk about the extra space it consumes._**  

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