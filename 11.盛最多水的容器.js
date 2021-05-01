/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    //遍历
    // var res = 0;
    // for(var i=0;i<height.length;i++){
    //     for(var j=i;j<height.length;j++){
    //         res = Math.max(res,Math.min(height[i],height[j])*(j-i))
    //     }
    // }
    // return res;

    //双指针
    var start = 0,res = 0;
    var end = height.length-1;
    while(start!=end){
        res = Math.max(res,(end-start)*Math.min(height[start],height[end]));
        if(height[start]<height[end]){
            start++;
        }
        else{
            end--;
        }
    }
    return res;
};
// @lc code=end

