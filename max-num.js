//Find maximum number from array

let arr = [14, 32, 39, 50, 60, 78];

function findNum() {
    let max = arr.reduce((max, el) => {
        if (max > el) {
            return max;
        } else {
            return el;
        }
    });
    return max;
}

//OUTPUT:-78
