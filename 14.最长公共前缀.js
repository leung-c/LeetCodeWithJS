/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length <= 0) {
        return "";
    }

    if (strs.length == 1) {
        return strs[0];
    }
    
    
    for (let index = 0; index < strs[0].length; index++) {
        const char = strs[0].charAt(index);
        var isSame = true;
        for (const str of strs) {
            if (str.charAt(index) != char) {
                return strs[0].substring(0,index);                
            }
        }       
    }
    return strs[0];
};
// @lc code=end