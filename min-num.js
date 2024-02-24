//Find minimum number from the array

let nums = [20, 40, 10, -4, 7, 2];

function getMin() {
    let min = nums.reduce((min, el) => {
        if (min < el) {
            return min;
        } else {
            return el;
        }
    });
    return min;
}