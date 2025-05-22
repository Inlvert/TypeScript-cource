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

//------------------------ task - conditions

// const currRate = "1.05";

// const fetchCurr = (response) => {
//   const data = JSON.parse(response);
//   return data;
// }

// function transferEurToUsd(available, amount, commission) {
//   if(available) {
//     let res = fetchCurr(currRate) * amount * commission;
//     console.log(res);
//   } else {
//     console.log('you can not exchange Eur')
//   }
// }

// transferEurToUsd(true, 500, 1.05)

//------------------------- task - solution

// const currRate = "1.05";

// const fetchCurr = (response: string): string => {
//   const data = JSON.parse(response);
//   return data;
// }

// function transferEurToUsd(available: boolean, amount: number, commission: number) {
//   if(available) {
//     let res = +fetchCurr(currRate) * amount * commission;
//     console.log(res);
//   } else {
//     console.log('you can not exchange Eur')
//   }
// }

// transferEurToUsd(true, 1000, 1.05)

//--------------------------- type never

// const createError = (mag: string) => {
//   throw new Error("Error");
// };

// const createError2 = (mag: string) => {
//   while (true) {}
// };

// const foo = (isBirthday: boolean, age: number, userName: string): string => {
//   if (isBirthday) {
//     return `congrats ${userName.toUpperCase()}, age${age + 1}`;
//   } else {
//     return createError("Error"); //type never
//   }
// };

// const foo2 = (isBirthday: boolean, age: number, userName: string): string => {
//   if (isBirthday) {
//     return `congrats ${userName.toUpperCase()}, age${age + 1}`;
//   }
//   return createError("Error"); //type never
// };

//---------------------------- null & undefined

// const test1: null = null;
// const test2: any = null;
// const test3: string = null; // Error
// const test4: number = null; // Error

// const test5: undefined = undefined;
// const test6: any = undefined;
// const test7: string = undefined; // Error

//---------------------------- symbol

// let id: symbol = Symbol("id");

// const data = {
//   [id]: 1
// };

// console.log(data[id])

//---------------------------- bigint

// const num1: bigint = 1n; //"target": "es2020",
// const num2: bigint = 2n;

// console.log(num1 + num2);

//--------------------------- object

// const isBirthdayData: boolean = true;
// let ageData: number = 34;
// const userNameData: string = "John";

// const userData = {
//   isBirthdayData: true,
//   ageData: 34,
//   userNameData: "John",
//   smth: 'text',
// }

// const createError = (mag: string) => {
//   throw new Error("Error");
// };

// function foo(data: {
//   isBirthdayData: boolean,
//   ageData: number,
//   userNameData: string,
// }): string {
//   if (data.isBirthdayData === true) {
//     return `congrats ${data.userNameData.toUpperCase()}, age${data.ageData + 1}`;
//   } else {
//     return createError("Error");
//   }

// }

// console.log(foo(userData))

//---------------------------- destructuring

const isBirthdayData: boolean = true;
let ageData: number = 34;
const userNameData: string = "John";

const userData = {
  isBirthdayData: true,
  ageData: 34,
  userNameData: "John",
  messages: {
    error: "Error",
  },
};

const createError = (mag: string) => {
  throw new Error("Error");
};

function foo({
  isBirthdayData: isBirth, // destructuring and rename
  ageData: age, // destructuring and rename
  userNameData: user, // destructuring and rename
  messages: { error }, // destructuring
}: {
  isBirthdayData: boolean;
  ageData: number;
  userNameData: string;
  messages: {
    error: string;
  };
}): string {
  if (isBirth === true) {
    return `congrats ${user.toUpperCase()}, age${age + 1}`;
  } else {
    return createError(error);
  }
}

console.log(foo(userData));
