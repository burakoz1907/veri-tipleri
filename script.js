
let age = 25
console.log(age);



let firstName = 'Burak'
console.log(firstName);


let isStudent = true
console.log(isStudent);




let car
console.log(car);


let color = null
console.log(color);



let count = 841
let numbers = [1, 2, 3, 4, 5, count, country = {
    countName: 'Turkey',
}]
console.log(numbers);
console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[5]);
console.log(numbers[6].countName);




let city = 'İstanbul'
let user = {
    name: 'Burak',
    age: 21,
    isDeveloper: true,
    isCity: city
}
console.log(user);
console.log(user.name);
console.log(user.age);
console.log(user.isDeveloper);
console.log(user.isCity);



function sayHello() {
    console.log('Merhaba Dünya');
}
console.log(sayHello());



let set = new Set([1, 2, 3, 4, 5, 6, 7, 8,])
console.log(set);


let map = new Map([['name', 'Burak'], ['age', 21], ['city', 'istanbul']])
console.log(map);



let today = new Date()
console.log(today);


let date = new Date()
console.log(`
Day: ${date.getDate()}
Month: ${date.getMonth() + 1}
Year: ${date.getFullYear()}
Today:${date.getDate()}/${date.getMonth()}/${date.getFullYear()}
`);



