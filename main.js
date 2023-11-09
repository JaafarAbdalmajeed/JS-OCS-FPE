




/*         ---trim---          */

const str1 = "   Hello, World!   ";
const trimmedStr = str1.trim();
console.log(trimmedStr); // Output: "Hello, World!"








/*         ---trimStart---          */

const str2 = "   Hello, World!   ";
const trimmedStartStr = str2.trimStart();
console.log(trimmedStartStr); // Output: "Hello, World!   "












/*         ---trimEnd---          */

const str3 = "   Hello, World!   ";
const trimmedEndStr = str3.trimEnd();
console.log(trimmedEndStr); // Output: "   Hello, World!"







/*         ---padStart---          */

const str4 = "5";
const paddedStr1 = str4.padStart(3, "0");
console.log(paddedStr1); // Output: "005"


const paddedStr2 = str4.padStart(10, "foo");
console.log(paddedStr2); // Output: "foofoofoo5"











/*         ---padEnd---          */

const str5 = "5";
const paddedStrEnd1 = str5.padEnd(3, "0");
console.log(paddedStrEnd1); // Output: "500"

const paddedStrEnd2 = str4.padEnd(10, "oof");
console.log(paddedStrEnd2); // Output: "5oofoofoof"










/*         ---charAt---          */

const str6 = "Hello";
const char = str6.charAt(2);
console.log(char); // Output: "l"











/*         ---charCodeAt---          */

const str7 = "Hello";
const charCode = str7.charCodeAt(2);
console.log(charCode); // Output: 108 (Unicode value for "l")

const heartEmoji = "🙂";
console.log(heartEmoji.charCodeAt(0)); // Output: 10084











/*         ---split---          */

const str = "apple,orange,banana";
const fruitsArray1 = str.split(",");
console.log(fruitsArray1); // Output: ["apple", "orange", "banana"]

const fruitsArray2 = str.split("n");
console.log(fruitsArray2); // Output: [ 'apple,ora', 'ge,ba', 'a', 'a' ]




const fullName = "John Doe";

const [firstName, lastName] = fullName.split(" ");

console.log(firstName); // Output: "John"
console.log(lastName); // Output: "Doe"




