/* Шифрование */
function encryptPassword(password) {
    const symbols = password.split('');
    
    // Меняем местами символы на четных и нечетных позициях
    for (let i = 0; i < symbols.length - 1; i += 2) {
        const temp = symbols[i];
        symbols[i] = symbols[i + 1];
        symbols[i + 1] = temp;
    }
    
    return symbols.join('');
}

/* Проверка */
function checkPassword(encryptedPassword, passwordToCheck) {
    // Дешифруем зашифрованный пароль
    const decryptedPassword = encryptPassword(encryptedPassword);
    
    // Сравниваем с проверяемым паролем
    return decryptedPassword === encryptedPassword;
}


const originalPassword = 'password123';
const encryptedPassword = encryptPassword(originalPassword);
console.log('Оригинальный пароль:', originalPassword);
console.log('Зашифрованный пароль:', encryptedPassword);

const isMatch = checkPassword(encryptedPassword, originalPassword);
console.log('Пароль совпадает:', isMatch);