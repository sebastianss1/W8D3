Array.prototype.myEach = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i]);
    }
};

let arr = [1,2,3,4,5,6];

[1,2,3,4,5,6].myEach(function(nums) {
    console.log(nums * nums);
});


