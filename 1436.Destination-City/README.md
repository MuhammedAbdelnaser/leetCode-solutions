# 1436. Destination City

**Difficulty:** _Easy_

## _[Problem](https://leetcode.com/problems/destination-city/)_

You are given the array `paths`, where `paths[i] = [cityAi, cityBi]` means there exists a direct path going from `cityAi` to `cityBi`. _**Return the destination city, that is, the city without any path outgoing to another city.**_

It is guaranteed that the graph of paths forms a line without any loop, therefore, there will be exactly one destination city.

**Example 1:**

```plaintext
Input: paths = [["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]]
Output: "Sao Paulo"
Explanation: Starting at "London" city you will reach "Sao Paulo" city which is the destination city.
Your trip consist of: "London" -> "New York" -> "Lima" -> "Sao Paulo".
```

**Example 2:**

```plaintext
Input: paths = [["B","C"],["D","B"],["C","A"]]
Output: "A"
Explanation: All possible trips are:
"D" -> "B" -> "C" -> "A".
"B" -> "C" -> "A".
"C" -> "A".
"A".
Clearly the destination city is "A".
```

**Example 3:**

```plaintext
Input: paths = [["A","Z"]]
Output: "Z"
```

**Constraints:**

- `1 <= paths.length <= 100`
- `paths[i].length == 2`
- `1 <= cityAi.length, cityBi.length <= 10`

## Solutions

### High-level Idea

- The idea is to keep track of the cities that we can reach from the current city.
  - We can do this by iterating through the array and adding the destination city to a set.
  - Then, we can iterate through the array again and remove the source city from the set.
  - Return the only city left in the set.
  - If the array is empty, return an empty string.
