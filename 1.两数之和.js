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
    //暴力循环
    // var res = [];
    // for(var i=0;i<nums.length;i++){
    //     for(var j=i+1;j<nums.length;j++){
    //         if(nums[j]==target -nums[i]){
    //             res.push(i);
    //             res.push(j);
    //             return res;
    //         }
    //     }
    // }
    // return res;

    //哈希表
    var res = [];
    var map = new Map();
    for(var i=0;i<nums.length;i++){
        var temp = target-nums[i];
        if(map.has(temp)){
            res.push(map.get(temp));
            res.push(i);
        }
        map.set(nums[i],i);
    }
    return res;
};
// @lc code=end

