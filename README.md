# Data structures and Algorithms
## What is Good Code?
### Readable 📖
- Is your code clean and others understands it.
### Scalable 📈
- Does the code does not lag and perform well when inputs increase?

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

#### Rule 4: Drop Non-Dominants

### O(log n)
### O(n log n)
### O(n^2)
### O(2^n)
### O(n!)