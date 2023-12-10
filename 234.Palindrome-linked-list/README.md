# Palindrome Linked List

## Description

Given the head of a singly linked list, the task is to determine whether the linked list is a palindrome or not.

A palindrome is a sequence that reads the same backward as forward.

## Examples

### Example 1

```plaintext
Input: head = [1, 2, 2, 1]
Output: true
Explanation: The linked list forms a palindrome: 1 -> 2 -> 2 -> 1.
```

### Example 2

```plaintext
Input: head = [1, 2]
Output: false
Explanation: The linked list does not form a palindrome: 1 -> 2.
```

## Constraints

* The number of nodes in the list is in the range `[1, 10^5]`.
* `0 <= Node.val <= 9`

## Solution

### High-level Idea

* The idea is to use a stack to store the first half of the linked list.
  * We can do this by iterating through the linked list and pushing each node onto the stack.
  * Once we reach the middle of the linked list, we can stop pushing nodes onto the stack.
  * If the length of the linked list is odd, we need to skip over the middle node.
  * Then, we can iterate through the rest of the linked list and compare each node to the node at the top of the stack.
