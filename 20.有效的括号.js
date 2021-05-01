/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var stack = []
    if(s.length%2==1) return false
    for(let i=0;i<s.length;i++){
        var obj = s[i]
        if(obj=='(' || obj=='[' || obj=='{'){
            stack.push(obj)
        }
        else {
            if(stack.length==0){
                return false}       
            var top = stack[stack.length-1]
            if((top=='(' && obj==')')||(top=='[' && obj==']')
                ||(top=='{' && obj=='}')) 
                stack.pop()
            else
                return false
        }
    }
    return stack.length==0
};
// @lc code=end

