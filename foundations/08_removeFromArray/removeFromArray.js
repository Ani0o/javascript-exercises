const removeFromArray = function(arr, ...nums) {

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (arr[i] === nums[j]) {
                arr.splice(i, 1);
                i--;
            }
        }
    }

    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
