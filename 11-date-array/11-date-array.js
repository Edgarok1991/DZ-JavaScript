const Array = ['10-02-2022', 'тест', '11/12/2023', '00/13/2022', '41/12/2023'];
function isValidDate(dateString) {
    const parts = dateString.includes('-') ? dateString.split('-') : dateString.split('/');
    
    if (parts.length !== 3) {
        return false;
    }

const [day, month, year] = parts.map(part => Number(part, 10));

    // Проверка на корректность месяца и дня
    if (month < 1 || month > 12 || day < 1 || year < 1) {
        return false;
    }

    // Количество дней в каждом месяце (без учета високосного года)
    const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    
    return day <= daysInMonth[month - 1];
}

function filterValidDates(arr) {
    const validDates = [];
    
    for (const dateString of arr) {
        if (isValidDate(dateString)) {
            validDates.push(dateString);
        }
    }
    
    return validDates;
}

const validDates = filterValidDates(Array);

console.log(validDates);