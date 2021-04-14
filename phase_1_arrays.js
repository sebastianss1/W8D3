Array.prototype.uniq = function() {
        let uniqueArray = [];
        for (let i = 0; i < this.length; i++) {
            if (!uniqueArray.includes(this[i])) { 
                uniqueArray.push(this[i]);
            }
        }
    return uniqueArray;
};

// [1,2,3, 3, 3 ,4].uniq()

Array.prototype.twoSum = function() {
    let pairsArray = [];
    debugger
    for (let i = 0; i < this.length - 1; i++) {
        // for (let j = (i + 1); j < this.length; j++) {
            if (this[i] + this[i + 1] === 0) {
                debugger
                pairsArray.push([this[i], this[i + 1]]);
            }
        // }
    }
    return pairsArray;
};

[1, -1, 2, 2].twoSum()
