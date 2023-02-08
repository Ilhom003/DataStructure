// Array destructure

// let arr = ['apple','orange','banana','kiwi'];
//  let [bir,ikki,uch,tort] = arr;
//  let [bir, ...res] = arr;
//  console.log(bir,res);

// const getData = ({name,age}) => {
// console.log(name,age);
// }
// getData({ name: 'Ilhom', age: 19 })


// NewDate
// console.log(Date.now());
// let date = new Date();
// console.log(date.getTime());
// console.log(date.getDay());
// console.log(date.getDate());
// console.log(date.getMonth());
// console.log(date.getFullYear());

// const getToday = () => {
    //     let date = new Date();
    //     return `Today: ${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`
    // }
    
    // console.log(getToday());
    
    let date = new Date();
    // console.log(date.getHours());
    // console.log(date.getMinutes());
    // console.log(date.getSeconds());
    // console.log(date.getMilliseconds());

let user = { name: 'Ilhom', age: 19 }
console.log(JSON.stringify(user,["name",]));