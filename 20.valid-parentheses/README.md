# valid parentheses

[Problem](https://leetcode.com/problems/valid-parentheses/)
**Difficulty: Easy**

```plaintext
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:
    1. Open brackets must be closed by the same type of brackets.
    2. Open brackets must be closed in the correct order.
```

## Problem Statement

### Example 1

```plaintext
Input: s = "()"
Output: true
```

### Example 2

```plaintext
Input: s = "()[]{}"
Output: true
```

### Example 3

```plaintext
Input: s = "(]"
Output: false
```

### Constraints

* `1 <= s.length <= 104`
* `s` consists of parentheses only `'()[]{}'`.

### High-level Idea

* The idea is to use a stack to keep track of the opening brackets.
* We iterate through the string.
  * If the current character is an opening bracket, we push it onto the stack.
  * If the current character is a closing bracket, we check if the top of the stack is the corresponding opening bracket.
    * If it is, we pop the top of the stack.
    * If it isn't, we return false.
    * We also need to make sure that the stack isn't empty when we try to pop from it.
      * If it is, we return false.

* At the end, we return true if the stack is empty and false otherwise.
* If the string is empty, we return true.
* If the string has an odd number of characters, we return false.
