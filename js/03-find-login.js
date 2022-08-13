
const logins = ['m4ngoDoge', 'k1widad3st', 'poly1scute', 'aj4xth3m4n'];
const loginToFind = 'poly1scute';
// let message = `Користувач ${loginToFind} не знайдений`;

// for (let i = 0; i < logins.length; i += 1) {
//     const login = logins[i];

//     if (login === loginToFind) {
//         message = `Пользователь ${loginToFind}  найденю`;
//         break;
//     }
    
//         message = `Пользователь ${loginToFind}  найденю`;
    
// }

// for (const login of logins) {
//     console.log('Login: ', login);
//     console.log(`${login} === ${loginToFind}: `, login === loginToFind);

//     if (login === loginToFind) {
//         console.log('Ура рівні!!!');
//         message = `Користувач ${loginToFind} знайдений.`;
//         break
//     }
// }

// console.log(message);
const message = logins.includes(loginToFind)
    ? `Користувач ${loginToFind} знайдений.`
    : `Користувач ${loginToFind} не знайдений.`;

console.log(message);

//