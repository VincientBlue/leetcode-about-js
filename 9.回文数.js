/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let strx = x.toString()
    let restr = ''
    for(let i=strx.length-1;i>=0;i--){
        restr +=strx[i]
    }
    return strx == restr
};
// @lc code=end

