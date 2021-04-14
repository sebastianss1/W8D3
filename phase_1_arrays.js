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
    
    // [1, -1, 2, 2].twoSum()
    
Array.prototype.transpose = function () {
    let transposeArray = [];  // Array.new(this.length) { Array.new(this[col].length)}
    // [[],[],[]]
    debugger
    for (let row = 0; row < this.length; row++) {
        debugger
        for (let col = 0; col < this[row].length; col++) {
            debugger
            // let subArray = [];
            if (col === 0) {
                debugger
                transposeArray.push([this[col][row]]);
            } else {

                transposeArray[row].push(this[col][row])

            }
        }
    }
    return transposeArray;
};


// [[1, 2, 3], [4, 5, 6], [7, 8, 9]].transpose()