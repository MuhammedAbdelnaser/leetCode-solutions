function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const isPalindrome = function (head) {

  const reverseList = function (node) {
    let prev = null;
    while (node !== null) {
      const next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return prev;
  };

  const findMiddle = function (node) {
    let slow = node;
    let fast = node;
    while (fast !== null && fast.next !== null) {
      slow = slow.next;
      fast = fast.next.next;
    }
    return slow;
  };


  const areEqualLists = function (list1, list2) {
    while (list1 !== null && list2 !== null) {
      if (list1.val !== list2.val) {
        return false;
      }
      list1 = list1.next;
      list2 = list2.next;
    }
    return true;
  };

  if (!head || !head.next) {
    return true;
  }

  const middle = findMiddle(head);
  const secondHalfReversed = reverseList(middle);

  return areEqualLists(head, secondHalfReversed);
};
