//Rectangle area
let length = 2;
let width = 5;
let rectanglearea = length * width;

console.log("Honey, this rectangle area is:" + rectanglearea);

//BMI
let weight = 75;
let height = 1.7;
let bmi = weight / (height * height);

console.log("Well, this body mass index is:" + bmi);

// Temperature
let celcius = 20;
let farenheit = (9 / 5) * celcius + 32;

console.log("And this temperature in celsius is:" + farenheit);

//Booleans
let number = 20;
let isAdult: boolean = number >= 18;

console.log("Do the stars say that this person is an adult?: " + isAdult);

number = 11;
isAdult = number >= 18;

console.log("Do the stars say that this person is an adult?: " + isAdult);

// String
let FirstName = "Sherlock";
let LastName = "Holmes";
let FullName = FirstName + " " + LastName;

console.log("Hello darling, my name is " + FullName);

// Strict Equality with Different Types
let UserAge: string = "20";
let ActualAge: number = 20;

let isequalloose = UserAge == ActualAge; // 20 == 20
let isequalstrict = UserAge === ActualAge; // string !== number

console.log("Loose equality: " + isequalloose);
console.log("Strict equality: " + isequalstrict);

// From string to number
let StringNumber = "20";
let ConvertedNumber = Number(StringNumber);

console.log("Ehh, this string value is: " + StringNumber);
console.log("And converted number is: " + ConvertedNumber);

// From number to string
let NumberValue = 66;
let ConvertedString = String(NumberValue);

console.log("Oh cmon, this number value is: " + NumberValue);
console.log("And converted string is: " + ConvertedString);
