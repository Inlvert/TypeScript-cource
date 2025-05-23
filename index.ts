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

// const isBirthdayData: boolean = true;
// let ageData: number = 34;
// const userNameData: string = "John";

// const userData = {
//   isBirthdayData: true,
//   ageData: 34,
//   userNameData: "John",
//   messages: {
//     error: "Error",
//   },
// };

// const createError = (mag: string) => {
//   throw new Error("Error happend");
// };

// function foo({
//   isBirthdayData: isBirth, // destructuring and rename
//   ageData: age, // destructuring and rename
//   userNameData: user, // destructuring and rename
//   messages: { error }, // destructuring
// }: {
//   isBirthdayData: boolean;
//   ageData: number;
//   userNameData: string;
//   messages: {
//     error: string;
//   };
// }): string {
//   if (isBirth === true) {
//     return `congrats ${user.toUpperCase()}, age${age + 1}`;
//   } else {
//     return createError(error);
//   }
// }

// console.log(foo(userData));

//------------------------ Array

// const departments: string[] = ["dev", "desing", "marketing"];

// const nums: number[][] = [[1, 2, 3], [4, 5, 6]];

// const department1 = departments[0];

// departments.push('')

// const report = departments.filter((d: string) => d !== "dev").map((d: string) => `${d} - done`);

// const [first, second] = report //destructuring array

// console.log(first)
// console.log(second)

//------------------------ task V1

// const electricityUserData = {
//   readings: 95,
//   units: "kWt",
//   mode: "double",
// };

// const waterUserData = {
//   readings: 3,
//   units: "m3",
// };

// const elRate: number = 0.45;
// const wRate: number = 2;

// const monthPayments: number[] = [0, 0]; // [electricity, water]
// // elData: { readings: number; mode: string; units: string },
// // wData: { readings: number; units: string },

// const calculatePayments = (
//   { readings, mode }: { readings: number; mode: string },
//   wData: { readings: number },
//   elRate: number,
//   wRate: number
// ): void => {
//   if (mode === "double" && readings < 50) {
//     monthPayments[0] = readings * elRate * 0.7;
//   } else {
//     monthPayments[0] = readings * elRate;
//   }

//   monthPayments[1] = wData.readings * wRate;
// };

// calculatePayments(electricityUserData, waterUserData, elRate, wRate);

// const sendInvoice = (
//   [el, water]: number[],
//   electricityUserData: { readings: number; mode: string; units: string },
//   waterUserData: { readings: number; units: string }
// ): string => {
//   const text = `    Hello!
//     This month you used ${electricityUserData.readings} ${electricityUserData.units} of electricity
//     It will cost: ${monthPayments[0]}€
    
//     This month you used ${waterUserData.readings} ${waterUserData.units} of water
//     It will cost: ${monthPayments[1]}€`;

//   return text;
// };

// console.log(sendInvoice(monthPayments, electricityUserData, waterUserData));

// //------------------------task V2

// const electricityUserData = {
// 	readings: 95,
// 	units: "kWt",
// 	mode: "double",
// };

// const waterUserData = {
// 	readings: 3,
// 	units: "m3",
// };

// const elRate: number = 0.45;
// const wRate: number = 2;

// const monthPayments: number[] = [0, 0]; // [electricity, water]

// const calculatePayments = (
// 	{ readings, mode }: { readings: number; mode: string },
// 	wData: { readings: number },
// 	elRate: number,
// 	wRate: number
// ): void => {
// 	if (mode === "double" && readings < 50) {
// 		monthPayments[0] = readings * elRate * 0.7;
// 	} else {
// 		monthPayments[0] = readings * elRate;
// 	}

// 	monthPayments[1] = wData.readings * wRate;
// };

// calculatePayments(electricityUserData, waterUserData, elRate, wRate);

// const sendInvoice = (
// 	[el, water]: number[],
// 	electricityUserData: { readings: number; units: string },
// 	waterUserData: { readings: number; units: string }
// ): string => {
// 	const text = `    Hello!
//     This month you used ${electricityUserData.readings} ${electricityUserData.units} of electricity
//     It will cost: ${el}€
    
//     This month you used ${waterUserData.readings} ${waterUserData.units} of water
//     It will cost: ${water}€`;

// 	return text;
// };

// const invoice = sendInvoice(monthPayments, electricityUserData, waterUserData);
// console.log(invoice);

//-------------------------------- Tuples Кортеж

const UserDataTuple: [boolean, number, string] = [true, 40, "John"];

const UserDataTuple2: [boolean, number, ...string[]] = [true, 40, "John", "Boris", "Yehor", ];

const UserDataTuple3: [...string[], boolean, number] = ["John", "Boris", "Yehor", true, 40, ];

