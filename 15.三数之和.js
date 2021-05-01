/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 * 三重循环是真写不出来 去不了重
 * 这个方法 妙啊
 */
var threeSum = function(nums) {
    let n = nums.length
    if(n<3) 
        return []
    nums = nums.sort((a,b)=>a-b)
    let res = []
    for(let i=0;i<n;i++){
        if(nums[i]>0)
            return res
        let L=i+1,R=n-1
        if(i>0 && nums[i]==nums[i-1])
            continue
        while(L<R){
            if(nums[i]+nums[L]+nums[R]==0){
                res.push([nums[i],nums[L],nums[R]])
                while(L<R && nums[L]==nums[L+1]){
                L++
                }
                while(L<R && nums[R]==nums[R-1]){
                R--
                }
            L++
            R--
            }
            else if(nums[i]+nums[L]+nums[R]<0){
                L++
            }
            else{
                R--
            }
        }
    }
return res
};
// @lc code=end

