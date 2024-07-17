const addressLat = 2;
const addressLong = -4;
const positionLat = -5;
const positionLong = 3;

const distance = (Math.sqrt(((addressLat - addressLong) ** 2) + ((positionLat - positionLong) ** 2)));
console.log(distance);
