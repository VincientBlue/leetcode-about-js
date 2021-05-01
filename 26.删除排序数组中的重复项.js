/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除排序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let res = 0
    let cur = -1
    for(num of nums){
        if(num!=cur){
            res += 1
            cur = num
        }
    }
    return res
};
// @lc code=end

