/**
 * @param {number} n
 * @return {number}
 */
/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n,memo={}) {
    if(n<2) return n
    if(n==2) return 1
    if(memo[n]) return memo[n]
    memo[n]=tribonacci(n-1,memo)+tribonacci(n-2,memo)+tribonacci(n-3,memo)
    return memo[n]
};