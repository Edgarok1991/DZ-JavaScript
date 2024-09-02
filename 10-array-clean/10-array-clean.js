function sortArray(numbers, deleteFunction) {
    const result = [];

    for (let i = 0; i < numbers.length; i += 2) {
        const num = numbers[i];
       
        if (!deleteFunction(num)) {
            result.push(num);
        }
    }

    return result;
}

function deleteEvenNumbers(num) {
    return num % 2 === 0;
}

const originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sortedArray = sortArray(originalArray, deleteEvenNumbers);

console.log(sortedArray);