const hasLicense = true;
const age = 18;
const isDrunk = false;

const canDrive = hasLicense && age  && !isDrunk;

console.log(`Может водить машину: ${canDrive ? 'Да' : 'Нет'}`)

