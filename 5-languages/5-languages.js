const language = prompt("Выберите язык");

switch(true) {
    case language === 'RUS':
        console.log('Добро пожаловать в Россию');
        break;
    case language === 'ENG':
        console.log('Welcome to UK');
        break;
    case language === 'DEU':
        console.log('Willkommen in Deutschland');    
        break;
    case language === 'FRA':
        console.log('Bienvenue en France');
        break;
    case language === 'CHS':
        console.log('欢迎来到中国');
        break;
        default:
        console.log('Выберите свой язык')

}