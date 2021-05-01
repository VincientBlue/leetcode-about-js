/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let abx = Math.abs(x)
    let res = 0
    while(abx>0){
        res = res*10 + abx%10
        abx = Math.floor(abx/10)
    }
    if(x<0){
        return res<=Math.pow(2,31)?-res:0
    }
    else{
        return res<Math.pow(2,31)?res:0
    }
};


// @lc code=end

