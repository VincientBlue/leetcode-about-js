/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if(root == null)
        return true
    else
        return checktwo(root.left, root.right)
};
var checktwo = function(left,right){
    if(left == right)
        return true
    if(left==undefined || right==undefined)
        return false
    return (left.val==right.val)&&checktwo(left.left,right.right)
            &&checktwo(left.right,right.left)
}
// @lc code=end

