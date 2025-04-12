// 1. Create a variable to store your name and display it in an alert.
const name = "Nnyenje Ibrahim";
// alert(name);

// 2. Declare two number variables and show their sum, difference, product, and quotient.
const num1 = 10;
const num2 = 5;
const sum = num1 + num2;
const difference = num1 - num2;
const product = num1 * num2;
const quotient = num1 / num2;
console.log("Sum:", sum);
console.log("Difference:", difference);
console.log("Product:", product);
console.log("Quotient:", quotient);

// 3. Write a program that converts Celsius to Fahrenheit.
function celciusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}
const celsius = 25;
const fahrenheit = celciusToFahrenheit(celsius);
console.log(`${celsius}°C is ${fahrenheit}°F`);

// 4. Create a program that calculates the area of a rectangle using variables for length and width.
function calculateRectangleArea(length, width) {
    return length * width;
}
const length = 10;
const width = 5;
const area = calculateRectangleArea(length, width);
console.log(`The area of a rectangle with length ${length} and width ${width} is ${area} units squared.`);

// 5. Write code that checks if a number is even or odd and displays the result.
function isEvenOrOdd(number) {
    return number % 2 === 0 ? "even" : "odd";
}
const number = 8;
const result = isEvenOrOdd(number);
console.log(`${number} is ${result}.`);

// 6. Create a program that determines if a year entered is a leap year.
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}
const year = 1999;
const isLeap = isLeapYear(year);
console.log(`${year} is ${isLeap ? "a leap year" : "not a leap year"}.`);

// 7. Write a function that returns the reverse of a string input.
function reverseString(str) {
    return str.split("").reverse().join("");
}
const inputString = "Hello, World!";
const reversedString = reverseString(inputString);
console.log(`Reversed string: ${reversedString}`);

// 8. Create a function that counts the number of vowels in a string.
function countVowels(str) {
    const vowels = "aeiouAEIOU";
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }
    return count;
}
const word = "Hello, World!";
const vowelCount = countVowels(word);
console.log(`Number of vowels: ${vowelCount}`);

// 9. Write a program that finds the largest number in an array of 5 numbers.
function findLargestNumber(numbers) {
    let largest = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > largest) {
            largest = numbers[i];
        }
    }
    return largest;
}
const numbersArray = [10, 20, 5, 30, 15];
const largestNumber = findLargestNumber(numbersArray);
console.log(`Largest number: ${largestNumber}`);

// 10. Create a function that checks if a string is a palindrome.
function isPalindrome(str) {
    const reversed = str.split("").reverse().join("");
    return str === reversed;
}
const palindromeString = "racecar";
const isPalin = isPalindrome(palindromeString);
console.log(`${palindromeString} is ${isPalin ? "a palindrome" : "not a palindrome"}.`);    

// 11. Write code that calculates the factorial of a number.
function calculateFactorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * calculateFactorial(n - 1);
}
const factorialNumber = 5;
const factorialResult = calculateFactorial(factorialNumber);
console.log(`The factorial of ${factorialNumber} is ${factorialResult}.`);

// 12. Create a function that generates a random number between two given values.
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const min = 1;
const max = 10;
const randomNum = getRandomNumber(min, max);
console.log(`Random number between ${min} and ${max}: ${randomNum}`);

// 13. Write a program that converts a number of seconds into hours, minutes, and seconds.
function convertSecondsToHMS(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    return `${hours} hours, ${minutes} minutes, ${remainingSeconds} seconds`;
}
const totalSeconds = 3667;
const timeString = convertSecondsToHMS(totalSeconds);
console.log(`Time: ${timeString}`);

// 14. Create a program that checks if a number is prime.
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}
const primeNumber = 17;
const isPrimeNum = isPrime(primeNumber);
console.log(`${primeNumber} is ${isPrimeNum ? "a prime number" : "not a prime number"}.`);

// 15. Write a function that capitalizes the first letter of each word in a sentence.
function capitalizeFirstLetter(sentence) {
    return sentence.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
}
const sentence = "javascript is fun";
const capitalizedSentence = capitalizeFirstLetter(sentence);
console.log(`Capitalized sentence: ${capitalizedSentence}`);

// 16. Create a program that calculates the sum of all numbers from 1 to n.
function calculateSum(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}
const n = 10;
const totalSum = calculateSum(n);
console.log(`Sum of numbers from 1 to ${n}: ${totalSum}`);

// 17. Write code that finds the average of numbers in an array.
function calculateAverage(numbers) {
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    return sum / numbers.length;
}
const numbersArray2 = [10, 20, 30, 40, 50];
const average = calculateAverage(numbersArray2);
console.log(`Average of numbers: ${average}`);

// // 18. Create a function that removes duplicate values from an array.
function removeDuplicates(arr) {
    return [...new Set(arr)];
}
const arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = removeDuplicates(arrayWithDuplicates);
console.log(`Array with duplicates removed: ${uniqueArray}`);

// 19. Write a program that counts down from 10 to 1, then displays "Blast off!".
function countdown() {
    for (let i = 10; i > 0; i--) {
        console.log(i);
    }
    console.log("Blast off!");
}
countdown();

// 20. Create a function that determines if a string contains only numbers.
function isNumeric(str) {
    return /^\d+$/.test(str);
}
const numericString = "12345";
const isNumericResult = isNumeric(numericString);
console.log(`${numericString} is ${isNumericResult ? "numeric" : "not numeric"}.`);

// 21. Write code that finds the second smallest number in an array.
function findSecondSmallest(numbers) {
    const uniqueNumbers = [...new Set(numbers)].sort((a, b) => a - b);
    return uniqueNumbers[1] !== undefined ? uniqueNumbers[1] : null;
}
const numbersArray3 = [10, 20, 5, 30, 15];
const secondSmallestNumber = findSecondSmallest(numbersArray3);
console.log(`Second smallest number: ${secondSmallestNumber}`);

// 22. Create a program that displays the multiplication table for a given number.
function multiplicationTable(number) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${number} x ${i} = ${number * i}`);
    }
}
const tableNumber = 5;
multiplicationTable(tableNumber);


// 23. Write a function that validates if a password meets specific criteria 
// (at least 8 characters, one uppercase, one lowercase, one number).
function validatePassword(password) {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return regex.test(password);
}
const password = "password123";
const isValidPassword = validatePassword(password);
console.log(`${password} is ${isValidPassword ? "valid" : "invalid"}.`);

// 24. Create code that simulates a simple calculator with basic operations.
function calculate(a, b, operator) {
    switch (operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return a / b;
        default:
            return "Invalid operator";
    }
}
const a = 10;
const b = 5;
const operator = "+";
const calculatedResult = calculate(a, b, operator);
console.log(`${a} ${operator} ${b} = ${calculatedResult}`);

// 25. Write a program that finds all factors of a given number.
function findFactors(number) {
    const factors = [];
    for (let i = 1; i <= number; i++) {
        if (number % i === 0) {
            factors.push(i);
        }
    }
    return factors;
}
const factorNumber = 28;
const factors = findFactors(factorNumber);
console.log(`Factors of ${factorNumber}: ${factors}`);


// 26. Create a function that checks if two strings are anagrams.
function areAnagrams(str1, str2) {
    const sortedStr1 = str1.split("").sort().join("");
    const sortedStr2 = str2.split("").sort().join("");
    return sortedStr1 === sortedStr2;
}
const string1 = "listen";
const string2 = "silent";
const string3 = "hello";
const string4 = "world";
const areAnagram = areAnagrams(string1, string2);
const areNotAnagram = areAnagrams(string3, string4);
console.log(`${string1} and ${string2} are ${areAnagram ? "anagrams" : "not anagrams"}.`);
console.log(`${string3} and ${string4} are ${areNotAnagram ? "anagrams" : "not anagrams"}.`);

// 27. Write a program that generates the Fibonacci sequence up to n terms.
function generateFibonacci(n) {
    const fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib.slice(0, n);
}
const fibonacciTerms = 10;
const fibonacciSequence = generateFibonacci(fibonacciTerms);
console.log(`Fibonacci sequence up to ${fibonacciTerms} terms: ${fibonacciSequence}`);

// 28. Create code that sorts an array of numbers without using the built-in sort method.
function bubbleSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
console.log(`Unsorted array: ${unsortedArray}`);
const sortedArray = bubbleSort(unsortedArray);
console.log(`Sorted array: ${sortedArray}`);

// 29. Write a function that counts how many times a specific element appears in an array.
function countOccurrences(arr, element) {
    return arr.filter(item => item === element).length;
}
const arrayToCount = [1, 2, 3, 1, 4, 1, 5];
const elementToCount = 1;
const count = countOccurrences(arrayToCount, elementToCount);
console.log(`${elementToCount} appears ${count} times in the array.`);

// 30. Create a shopping cart program where users can add items, remove items, and calculate the total price.
function ShoppingCart() {
    this.items = [];

    this.addItem = function(item) {
        const existingItem = this.items.find(i => i.name === item.name);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            item.quantity = 1;
            this.items.push(item);
        }
    };

    this.removeItem = function(name) {
        const index = this.items.findIndex(i => i.name === name);
        if (index !== -1) {
            this.items[index].quantity -= 1;
            if (this.items[index].quantity === 0) {
                this.items.splice(index, 1);
            }
        }
    };

    // Calculate the total price of all items in the cart
    this.calculateTotal = function() {
        return this.items.reduce((total, item) => total + (item.price * item.quantity), 0);
    }

    // Display all items in the cart
    this.displayItems = function() {
        console.log("Shopping Cart Items:");
        this.items.forEach(item => {
            console.log(`${item.name} (x${item.quantity}) - $${item.price * item.quantity}`);
        });
    }
   
}
const cart = new ShoppingCart();
cart.addItem({ name: "Apple", price: 1.5 });
cart.addItem({ name: "Banana", price: 2.0 });
cart.addItem({ name: "Apple", price: 1.5 });
cart.removeItem("Apple");
console.log(`Total price: ${cart.calculateTotal()}`);
cart.displayItems();

