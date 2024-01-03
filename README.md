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
#### Rule 2: Remove Constants
#### Rule 3: Different terms for inputs
#### Rule 4: Drop Non-Dominants