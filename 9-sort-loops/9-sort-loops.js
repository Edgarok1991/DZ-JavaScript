/* Сортируем по возрастани */ 

function sortAscending(arr) {
    const n = arr.length;
    
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    
    return arr;
}


const arr = [1, 40, -5, 10, 0];
const sortedArr = sortAscending(arr);
console.log('Отсортированный массив:', sortedArr);


/* Сортируем по убыванию */
function sortDescending(arr2) {
    const f = arr2.length;
    
    // Проходим по всему массиву
    for (let i = 0; i < f - 1; i++) {
        // Последние i элементов уже отсортированы
        for (let j = 0; j < f - 1 - i; j++) {
            // Если текущий элемент больше следующего, меняем их местами
            if (arr2[j] < arr2[j + 1]) {
                const temp = arr2[j];
                arr2[j] = arr2[j + 1];
                arr2[j + 1] = temp;
            }
        }
    }
    
    return arr2;
}


const arr2 = [1, 40, -5, 10, 0];
const sortedArr2 = sortDescending(arr2);
console.log('Отсортированный массив:', sortedArr2);