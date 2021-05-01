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
    var res = 0,count = 0,left = 0
    var lookstr = new Set()
    for(let i=0;i<s.length;i++){
        count +=1
        while(lookstr.has(s.charAt(i))){
            count -=1
            lookstr.delete(s.charAt(left))
            left += 1
        }
        lookstr.add(s.charAt(i))
        res = Math.max(res,count)
    }
    return res
};
// @lc code=end

