/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if (s.length <= 1) {
        return s.length;
    }
    let start = 0;
    let length = 1;
    let maxLength = 1;    
    const set = new Set()    
    set.add(s.charAt(0));
    while ((start + length) <= s.length) {       
        const end = s.charAt(start + length);
        
        if (!set.has(end) && end != '') {     
            set.add(end);                           
            length++;   
            if (length > maxLength) {
                maxLength = length; 
            }            
        } else {
            start++;
            length = 0;
            set.delete(end);
        }
    }    
    return maxLength;
};

lengthOfLongestSubstring('bbbbb')
// @after-stub-for-debug-begin
module.exports = lengthOfLongestSubstring;
// @after-stub-for-debug-end