# 1047. Remove All Adjacent Duplicates In String

**Difficulty:** `Easy`

## _[Problem](https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/)_

Given a string `S` of lowercase letters, a duplicate removal consists of choosing two adjacent and equal letters, and removing them.
We repeatedly make duplicate removals on `S` until we no longer can.
Return the final string after all such duplicate removals have been made.  It is guaranteed the answer is unique.

**Example 1:**

```plaintext
Input: "abbaca"
Output: "ca"
Explanation:
For example, in "abbaca" we could remove "bb" since the letters are adjacent and equal, and this is the only possible move.
The result of this move is that the string is "aaca", of which only "aa" is possible, so the final string is "ca".
```

**Note:**

1. `1 <= S.length <= 20000`
2. `S` consists only of English lowercase letters.

## Solutions

### High-level Idea

- The idea is to use a stack to keep track of the characters in the string.
  - We can iterate through the characters in `S`.
    - If the stack is empty, push the character onto the stack.
    - Otherwise, if the top of the stack is equal to the current character, pop the top of the stack.
    - Otherwise, push the current character onto the stack.
  - Return the string representation of the stack.
  