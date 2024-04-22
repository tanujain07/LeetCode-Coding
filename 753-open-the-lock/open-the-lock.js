/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function(deadends, target) {
    const invalid = new Set(deadends);
    const visited = new Set();
    const queue = [['0000']];
    const diff = [1, -1]

    if (invalid.has('0000')) {
        return -1;
    }
    
    if (target === '0000') {
        return 0;
    }
    
    let steps = 0;

    while (queue.length > 0) {
        const codes = queue.pop();
        const newCodes = [];

        for (const code of codes) {
            for (let i = 0; i < 4; i++) {
                for (const d of diff) {
                    const chars = code.split('');
                    chars[i] = parseInt(chars[i]) + d;

                    if (chars[i] === 10) {
                        chars[i] = 0;
                    } else if (chars[i] === -1) {
                        chars[i] = 9;
                    }

                    const newCode = chars.join('');

                    if (newCode === target) {
                        return steps + 1;
                    }

                    if (visited.has(newCode) || invalid.has(newCode)) {
                        continue;
                    }

                    visited.add(newCode);
                    newCodes.push(newCode);
                }
            }
        }
        
        if (newCodes.length > 0) {
            queue.push(newCodes);
        }
        
        steps++;
    }
    
    return -1;
};