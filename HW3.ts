//temterature converter
function ConvertToFarenheit(celcius: number): number {
  const result = (celcius * 9) / 5 + 32;
  return result;
}

//greeting
function greetUser(FirstName: string, LastName: string): string {
  const result = `Hello ${FirstName} ${LastName}!`;
  return result;
}

//Rectangle area
function RectangleArea(width: number, height: number): number {
  const result = width * height;
  return result;
}

//Summary of numbers
function AddNumbers(a: number, b: number): number {
  const result = a + b;
  return result;
}

//Data
console.log(ConvertToFarenheit(30));
console.log(greetUser("Sherlock", "Holmes"));
console.log(RectangleArea(4, 5));
console.log(AddNumbers(10, 5));
