/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {

  let mergedWords = '';
  const k = word1.length, l = word2.length
  const maxLength = Math.max(k , l)

  for (let i = 0; i < maxLength; i++) {
    if (i < k) mergedWords += word1[i]
    if (i < l) mergedWords += word2[i]
  }

  return mergedWords

};
