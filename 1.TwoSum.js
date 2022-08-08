/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var map = new Map();
    for (let index = 0; index < nums.length; index++) {
        const valueIndex = map[nums[index]];
        if (valueIndex != undefined) {
            return [valueIndex,index];
        }
        const value = target - nums[index];
        map[value] = index
    }
    return [];
};
