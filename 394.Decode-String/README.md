# 394. Decode String

**Difficulty:** `Medium`

## _[Problem](https://leetcode.com/problems/decode-string/)_

Given an encoded string, return its decoded string.

The encoding rule is: `k[encoded_string]`, where the `encoded_string` inside the square brackets is being repeated exactly `k` times. Note that `k` is guaranteed to be a positive integer.

You may assume that the input string is always valid; No extra white spaces, square brackets are well-formed, etc.

Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, `k`. For example, there won't be input like `3a` or `2[4]`.

**Example 1:**

```plaintext
Input: s = "3[a]2[bc]"
Output: "aaabcbc"
```

**Example 2:**

```plaintext
Input: s = "3[a2[c]]"
Output: "accaccacc"
```

**Example 3:**

```plaintext
Input: s = "2[abc]3[cd]ef"
Output: "abcabccdcdcdef"
```

**Constraints:**

- `1 <= s.length <= 30`
- `s` consists of lowercase English letters, digits, and square brackets `'[]'`.
- `s` is guaranteed to be a valid input.

## Solutions

### High-level Idea

- The idea is to use recursion to decode the string.
  - We can do this by iterating through the string.
    - If we encounter a digit, we can use a helper function to get the number.
    - If we encounter a left bracket, we can use a helper function to get the string inside the brackets.
    - If we encounter a right bracket, we can return the decoded string.
    - Otherwise, we can append the current character to the decoded string.
  - Return the decoded string at the end.
  - Note that we can use a global variable to keep track of the current index in the string.
