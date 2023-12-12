/**
 * @param {string} answerKey
 * @param {number} k
 * @return {number}
 */

const maxConsecutiveAnswers = function(answerKey, k) {
    let max = 0;
    let left = 0;
    let right = 0;
    let count = 0;
    while (right < answerKey.length) {
        if (answerKey[right] === 'F') {
            count++;
        }
        while (count > k) {
            if (answerKey[left] === 'F') {
                count--;
            }
            left++;
        }
        max = Math.max(max, right - left + 1);
        right++;
    }
    left = 0;
    right = 0;
    count = 0;
    while (right < answerKey.length) {
        if (answerKey[right] === 'T') {
            count++;
        }
        while (count > k) {
            if (answerKey[left] === 'T') {
                count--;
            }
            left++;
        }
        max = Math.max(max, right - left + 1);
        right++;
    }
    return max;
}