Array.prototype.myEach = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i]);
    }
};

let arr = [1,2,3,4,5,6];

[1,2,3,4,5,6].myEach(function(nums) {
    console.log(nums * nums);
});



Array.prototype.myMap = function(callback2) {
    let mappedArray = [];

    this.myEach(callback2)
        mappedArray.push(callback2);
        return mappedArray;
};

arr = [1, 2, 3, 4, 5, 6]

arr.myMap(function(nums) {
    console.log(nums * nums);
});




