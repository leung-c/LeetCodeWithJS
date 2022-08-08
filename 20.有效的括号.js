/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    if (s.length < 2 || (s.length) % 2 != 0) {
        return false;
    }

    var list = [];
    var map = {
        '{': '}',
        '[': ']',
        '(': ')'
    };
    for (const c of s) {
        if (map[c] == undefined) {
            if (map[list[list.length - 1]] == c) {
                list.pop();
            } else {
                return false;
            }
        } else {
            list.push(c);
        }
    }

    return list.length == 0;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = isValid;
// @after-stub-for-debug-end