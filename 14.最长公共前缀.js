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
    var res = ''
    if(strs.length===0 || strs===null){
        return res
    }
    if(strs.length == 1)
        return strs[0]
    var min = strs[0], max = strs[0]
    for (var obj of strs){
        // 不能用length 会有同等长度的字符串
        if(min > obj) min = obj
        if(max < obj) max = obj
    }
    for(let i=0;i<min.length;i++){
        if(min.charAt(i) != max.charAt(i)){
            return min.substring(0,i)
        }
    }
    return min
};
// @lc code=end

