// let userName: string = "Boris";
// userName.length;
// console.log(userName.length);
// const isBirthday: boolean = true;
// let age: number = 40;
// const userName: string = 'John';
// if(isBirthday) {
//   console.log(`congrats ${userName.toUpperCase()}, age${age + 1}`)
// }
//------------------- function
// const isBirthdayData: boolean = true;
// let ageData: number = 40;
// const userNameData: string = "John";
// function foo(isBirthday: boolean, age: number, userName: string): string {
//   if (isBirthday) {
//     return `congrats ${userName.toUpperCase()}, age${age + 1}`;
//   }
//   return 'warning'
// }
//----------------------------------
// const foo = (isBirthday: boolean, age: number, userName: string): string => {
//   if (isBirthday) {
//     return `congrats ${userName.toUpperCase()}, age${age + 1}`;
//   }
//   return "warning";
// };
// foo(isBirthdayData, 34, "Boris");
//-------------------- type any
// const userData =
//   '{"isBirthdayData": "true", "ageData": 34, "userNameData": "John"}';
// const userObj: {
//   isBirthdayData: boolean;
//   ageData: number;
//   userNameData: string;
// } = JSON.parse(userData);
// console.log(userObj)
// const foo = (isBirthday: boolean, age: number, userName: string): string => {
//   if (isBirthday) {
//     return `congrats ${userName.toUpperCase()}, age${age + 1}`;
//   }
//   return "warning";
// };
// foo(userObj.isBirthdayData, 34, "Boris");
//------------------------ task
var currRate = "1.05";
var fetchCurr = function (response) {
    var data = JSON.parse(response);
    return data;
};
function transferEurToUsd(available, amount, commission) {
    if (available) {
        var res = +fetchCurr(currRate) * amount * commission;
        console.log(res);
    }
    else {
        console.log('you can not exchange Eur');
    }
}
transferEurToUsd(true, 1000, 1.05);
