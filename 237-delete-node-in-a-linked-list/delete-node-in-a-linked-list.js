/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
    //change the current node's value to next node's value
    node.val = node.next.val;  
    // then remove the pointer to the next node and set it to next of next value)
    node.next = node.next.next;  
};