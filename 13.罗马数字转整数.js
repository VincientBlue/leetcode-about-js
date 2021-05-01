/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const form = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
        IV: 4,
        IX: 9,
        XL: 40,
        XC: 90,
        CD: 400,
        CM: 900
    }
    let res = 0
    for(let i=0;i<s.length;){
        if(i<s.length-1 && form[s.substring(i,i+2)]){
            var cur = form[s.substring(i,i+2)]
            res += cur
            i+=2 //!!!!
        }
        else{
            res += form[s.charAt(i)]
            i++ //!!!
        }
    }
    return res
};
// @lc code=end

