/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start 从后往前遍历，前一个数字比后一个数字小则 后者减前者 否则两者相加
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {

    const map = {
        'I':1,
        'V':5,
        'X':10,
        'L':50,
        'C':100,
        'D':500,
        'M':1000,
    };
    if (s.length == 1) {
        return map[s] ?? 0;
    }

    var result = map[s.charAt(s.length - 1)];
    for (let index = s.length - 2; index >= 0; index--) {
        const rNumber = map[s.charAt(index + 1)];
        const lNumber = map[s.charAt(index)];        
        if (rNumber >  lNumber && lNumber != undefined) {
            result -= lNumber;
        } else {
            result += lNumber;
        }                
    }

    return result;
};

// @lc code=end


// @after-stub-for-debug-begin
module.exports = romanToInt;
// @after-stub-for-debug-end