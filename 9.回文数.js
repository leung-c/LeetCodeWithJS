/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) {
        return false;
    }
    const numStr = x.toString();
    for (let start = 0, end = numStr.length - 1; start <= end ; start++, end--){
        const startNum = Number(numStr.charAt(start));
        const endNum = Number(numStr.charAt(end));
        if (startNum != endNum) {
            return false;
        }
        if (start == end) {
            return true;
        }                
    }
    return true;
};
