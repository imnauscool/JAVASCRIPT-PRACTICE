//1. Write a function that takes two numbers as arguments and returns their sum.

function sum(num1, num2) {
  return num1 + num2;
}

console.log(sum(2, 5));

//2. Write a function that takes a string as an argument and returns its length.
function length(str) {
  return str.length;
}
console.log(length("navneet"));

// 3. Write a program that takes two numbers and displays their sum, difference, product, and quotient.

const fun = (num1, num2) => {
  const sum = num1 + num2;
  const diff = num2 - num1;
  const mul = num1 * num2;
  const quo = num1 / num2;
  console.log(sum);
  console.log(diff);
  console.log(mul);
  console.log(quo);
};
fun(20, 10);

//4.Write a function that takes two numbers as arguments and returns the larger number.
const larger = (num1, num2) => {
  if (num1 > num2) {
    console.log("num1 is greater");
  } else {
    console.log("num2 is greater");
  }
};
larger(10, 20);

//5.Write a program that displays a string in reverse order.

const reverse = (str) => {
  const rev = str.split("").reverse().join("");
  return rev;
};
console.log(reverse("navneet"));
