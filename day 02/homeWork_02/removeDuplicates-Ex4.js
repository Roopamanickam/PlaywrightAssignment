//function to remove duplicates in the temp

let temp = [1, 2, 3, 4, 2, 5, 6, 1, 6];

function removeDuplicates(temp) {
    let unique = [];
    for (i = 0; i < temp.length; i++) {
        if (unique.indexOf(temp[i]) === -1) {
            unique.push(temp[i]);
        }
    }
    return unique;
}

console.log(removeDuplicates(temp));