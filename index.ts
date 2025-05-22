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

const isBirthdayDate: boolean = true;
let ageDate: number = 40;
const userNameDate: string = "John";

// function foo(isBirthday: boolean, age: number, userName: string): string {
//   if (isBirthday) {
//     return `congrats ${userName.toUpperCase()}, age${age + 1}`;
//   }

//   return 'warning'
// }

const foo = (isBirthday: boolean, age: number, userName: string): string => {
  if (isBirthday) {
    return `congrats ${userName.toUpperCase()}, age${age + 1}`;
  }

  return "warning";
};

foo(isBirthdayDate, 34, "Boris");

//-------------------- type any


