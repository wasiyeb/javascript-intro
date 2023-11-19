//Code Editors

//VS Code => Microsoft
//Sublime => (free for long time)
//ATOM => GitHub



var number = 5; //this is how to add inline comment
/* This is a multi-line 
comment */



/* Data types and variables */
/* JS provided 7 different Data type that can be used within JS.
undefined: a variable that is not set to be anything yet
null: nothing 
Boolean: true or false
String: Any sort of text
symbol: an immutable primitive value that is unique
number
Object: object can store a lot of different key value pairs. */

/* var myName = "Beau"
myName = 8

let ourName = "FullStuckDevelopers"

const pi = 3.14 */

/* Variables 
var: is used throughout the whole progarm
let: is used within the scope of where you declared that
const: is a variable that should never change. It can never change.*/

/* Storing Values with Assignment Operator */

var a; // this is declaring a variable to be called "a"
var b = 2; // this is declaring a variable "var b" and assigning the value
console.log(a)
/* the equals sign is the assignment operator*/

a = 7; //
b= a; //
console.log(a)

// Initializing Variables with assignment operator
var a = 5; // var a is declaring the variable; = 5 is initializing it
var b = 10;
var c = "I am a ";

//Do not change code below this line
a = a + 1;
b = b + 5;
c = c + "string!";
console.log(c)

/* Variable names and function names in Javascript are case sensitive. 
That means that capitalization matters.  */
//the ff declaration and assignment will not assign correctly and will result ERROR

//Declarations
var properCamelCase;

//Assignments
properCAmelCAse = "A String"

//Basic Math
//Adding Numbers
var sum = 10 + 0;
console.log(sum)

//Subtracting Numbers
var difference = 10 - 9
console.log(difference)

//Multiplying Numbers
var product = 8 * 10
console.log(product)

//Dividing Numbers
var quotient = 66 / 33;
console.log(quotient)

// Incrementing Numbers: to increment a number means to add 1 to it
var myVar = 87;

// Only change code below this line

myVar = myVar + 1; //a quicker way to increment a number is
myVar++;
console.log(myVar)

// Decrementing Numbers
var myVar = 11;
// Only change code below this line
myVar--;
console.log(myVar)

//Multiply and Dividing Two Decimals 
var product = 2.0 * 0.0;
console.log(product)
var quotient = 4.4 / 2.0
console.log(quotient)

//Finding a Remainder: the remainder operator is %
// Only change code below this line
var remainder; //The remainder operator is often used to determine if a number is even or odd
remainder = 11 % 3;
console.log(remainder)

//Augmented Math Operations
//Compound Assignment with Augmented Addition
var a = 3;
var b = 17;
var c = 12;

// Only change code below this line

//a = a + 12; //instead of B = 9 + B We can do 
    b += 9;
//b = 9 + b;
    b += 9;
//c = c + 7;
    c += 7;
console.log(c)

//Compound Assignment with Augmented Subtraction
var a = 11;
a -= 6;
console.log(a)


//Compound Assignment with Augmented Multiplication
var a = 5;
a *= 5
console.log(a)

//Compound Assignment with Augmented Division
var a = 28;
a /= 12
console.log(a)

//Declare String Variables 
var firstName = "W"
var lastName = "B"
// Only change code below this line
var myFirstname = "Wasi"
var myLastName = "Ezra"
console.log(myLastName);

//Escaping Literal Quotes: \” Javascript knows that this should just mean a quotation mark
var myStr = "I'm a \"double quated\" string inside \"double quates\"";
var myStr = "<a href=\"URL\" target=\"_blank\">Link</a>";
console.log(myStr);

//Quoting Strings with Single Quotes
//if we start the string with a single quate, we can remove the escape characters
var myStr = '<a href="URL" target="_blank">Link</a>';
console.log(myStr);

//Escape Sequences in Strings

/*****
 CODE OUTPUT
 \' single quote
 \" double quote
 \\ backslash
 \n newline
 \r carriage return
 \t tab
 \b backspace
 \f form feed
 *****/
var myStr = "FirstLine\n\t\\SecondLine\nThrirdLine";
console.log(myStr);
//Output
/* 
FirstLine
	\SecondLine
ThrirdLine */

//Concatenating Strings with Plus Operator
//Example
var ourStr = "I come first. " + "I come second.";
//Only change code below this line
var ourStr = "This is the start. " + "This is the end.";
console.log(ourStr);

//Concatenating Strings with Plus Equals Operator
var myStr = "This is the first sentence. "
myStr += "This is the second sentence."

console.log(myStr)
//Constructing Strings with Variables
var myName = "Wasi";
var myStr = "My name is " + myName + " and I am well!";
console.log(myStr)
//OUTPUT: My name is Wasi and I am well!

//Appending Variables to Strings
var anAdjective = "awesome!";
var ourStr = "freeCodeCamp is ";
ourStr += anAdjective;
//Only change code below this line
var someAdjective = "worthwhile";
var myStr = "learning to code is ";
myStr += someAdjective;
console.log(myStr)

//Find length of a String
//Example
var firstNameLength = 0;
var firstName = "Ada";

firstNameLength = firstName.length;

//Setup
var lastNameLength = 0;
var lastName = "Lovelace";

//Only change code below this line

lastNameLength = lastName.length;
console.log(firstNameLength);
console.log(lastNameLength);


//Bracket Notation to Find First Character in String
var firstLetterOfFirstName = "";
var firstName = "Ada";

firstLetterOfFirstName = firstName[0]; //like most programming laguage, JavaScript start counting at Zero
//  /*i.e., A = 0; d = 1; a = 2 */
//Setup
var firstLetterOfLastName = "";
var lastName = "Lovelace";

//Only change code below this line

firstLetterOfLastName = lastName[0];

console.log(firstLetterOfLastName);

//String Immutability: Strings are immutable, meaning they cannot be altered once created
//Setup
var myStr = "Jello World";
//Only change code below this line
myStr = "H"; //we're not able to modify string using baracket notation
myStr = "Hello World"; //Fix me

console.log(myStr)

//Bracket Notation to Find Nth Character in String
var firstName = "Ada";
var secondLetterOfFirstName = firstName[1]

//Setup
var lastName = "Lovelace";
//Only change code below this line
var secondLetterOfLastName = lastName[1];
console.log(secondLetterOfLastName);

// Bracket Notation to Find Last Character in String
//Setup
var lastName = "Lovelace";
var lastLetterOfLastName = lastName[lastName.length - 1];

console.log(lastLetterOfLastName);

//Bracket Notation to Find Nth-to-Last Character in String
//Setup
var lastName = "Lovelace";
var secondToLastLetterOfLastName = lastName[lastName.length - 2];
console.log(secondToLastLetterOfLastName);

//Word Blanks:  Mad Lib game you are provided sentences with some missing words like nouns, verbs, adjectives, and adverbs.
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
    //Your code below this line
    var result = "";
    result += "The " + myAdjective + " " + myNoun + " " + myVerb + " to the store " + myAdverb + "."

    //Your code above this line
    return result;
}
    //Change the words here to test your function
    console.log(wordBlanks("dog", "big", "ran", "quickly"));
    console.log(wordBlanks("bike", "slow", "flew", "slowly"));


//Arrays: Arrays allow you to store several pieces of data in one place.
//Store Multiple Values with Arrays

//Example
var ourArrays = ["John", 23]; //every element in the array is separated by a comma

var myArray = ["Quincy", 1]
//Nest Arrays: When one of the elements in an array is another array
var ourArrays = [["the university", 42], ["everything", 101010]];
var myArray = [["Bulls", 23], ["White", 24]];

//Accesses Array Data with Indexes
var myArray = [50,60,70];
var myData = myArray[0];
console.log(myData);

//Modify Array Data With Indexes]: we're not able to modify string using baracket notation but with arrays, we modify them
var myArray = [18, 64, 99];
myArray[1] = 45;
console.log(myArray);

//Access Multi-Dimensional Arrays With Indexes
var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];
var myData = myArray[2][1];// to select a value equal to 8
console.log(myData)

//Manipulate Arrays with push(): You can have pinned data to the end of an array with the push function.
var myArray = [["John", 23], ["Cat", 2]];
myArray.push(["KU Leuven", 3]);
console.log(myArray);

//Manipulate Arrays with pop(): the pop() function remove an item from an array
var myArray = [["John", 23], ["Cat", 2]];
var removedFromMyArray = myArray.pop();
console.log(myArray);
console.log(removedFromMyArray);


//Manipulate Arrays with shift(): the shift() function removes the first element of the array instead of the final element
var myArray = [["John", 23], ["Cat", 2]];
var removedFromMyArray = myArray.shift();
console.log(myArray);
console.log(removedFromMyArray);

//Manipulate Arrays with unshift(): the unshift() function adds an element to the begning of the array
var myArray = [["John", 23], ["Cat", 2]];
myArray.unshift(["KU Leuven", 3]);
var myData = myArray[0]
console.log(myData);

//Shopping List: another example of array
var myList = [["cereals", 3], ["milk", 2], ["banana", 3], ["juice", 2], ["eggs", 12]];

//Write Reusable Code with functions: the ff is how a function is setup in JavaScript
function ourReusableFunction() {
    console.log("Heyya, World");
}//everything inside the curly bracket is run anytime the function is called or invoked.

ourReusableFunction(); //Here the function is being called by just putting the function name with parenthesis after the name.
function reusableFunction() {
    console.log("Hi World")
}
reusableFunction();

//Passing Values to Functions with Arguments: Parameters are variables that act as placeholders for the values
function ourFunctionWithArgs(a, b) {
    console.log(a + b);
}

ourFunctionWithArgs(10, 5);

//Global Scope and Functions: Scope refers to the visibility of variables
//Global scope means they can be seen everywhere in your Javascript code

//Declare your variable here
var myGlobal = 10;

function fun1() {
    //assign 5 to oopsGlobal here
   oopsGlobal = 5; //if you use a var keyword here, since this is within a function, it will be scoped to this function, however, since there’s no var keyword, it becomes global automatically.
}

//Only change code above this line
function fun2() {
    var output = "";
    if (typeof myGlobal != "undefined") { //since this function can access the myGlobal variable, myGlobal does not equal “undefined”
        output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
        output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output)
}
fun1();
fun2();

//Local Scope and Functions: Variables which are declared within a function as well as the function parameters have local scope
function myLocalScope() {
    var myVar = 5;
    console.log(myVar); //since this is console.log within the function, there is the output 5
}
myLocalScope();

console.log(myVar);//ReferenceError: output is not defined; because it tried to access myVar outside of the function


//Global vs Local Scope in Functions: when there are both local and global functions with the same name, the local variable takes precedent over the global variable
var outerWear = "T-Shirt";

function myOutfit() {
    outerWear = "Short";

    return outerWear;
}

console.log(myOutfit());
console.log(outerWear);

//Return a Value from a Function with Return:
function minusSeven(num) {
    return num - 7;
}
console.log(minusSeven(10));

//example 2
function timesFive(num) {
    return num*5;
}
console.log(timesFive(10));

//Understanding Undefined Value Returned from a Function
var sum = 0;
function addThree() {
    sum += 3;
}
console.log(addThree(10)); // undefined

//Assignment with a Returned Value
var processed = 0;

function ProcessedArg(num) {
    return (num + 3) / 5;
}

processed = ProcessedArg(7);

console.log(processed);

//Stand in Line: In computer science a cue is an abstract data structure where items are kept in order
//New items can be added to the back of the cue and old items are taken off from the front of the cue
function nextInLine(arr, item) {
    arr.push(item)
    return arr.shift();
}

var testArr = [1,2,3,4,5];

console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));


//Boolean Values: only two values, true or false
function welcomeToBooleans() {
    return false;
}
console.log(welcomeToBooleans());

//Use Conditional Logic with If Statements: The keyword If tells Javascript to execute the code in the curly braces under certain conditions defined in the parenthesis.
function ourTrueOrFalse(isItTrue) {
    if (isItTrue) {
        return "Yes, it's true";
    }
    return "No, it's false";
}

function trueOrFalse(wasThatTrue) {
    if (wasThatTrue) {
        return "Yes, that was true"
    }
    return "No, that was false";
}

console.log(trueOrFalse(false));

//Comparison with the Equality Operator: There are many comparison operators in Javascript that will return a Boolean of true or false. The most common is the equality operator.
function testEqual(val) {
    if (val == '10') {
        return "Equal";
    }
    return "Not Equal";
}
console.log(testEqual(10));

//Comparison with the Strict Equality Operator
function testStrict(val) {
    if (val === '3') {
        return "Strictly Equal";
    }
    return "Not Strictly Equal";
}
console.log(testStrict(3)); //Not Strictly Equal

// 3 === 3 Strictly Equal
// 3 === '3' this would be true if we were using the the Equality Operator because the string would be converted to a number and it would be equal to true

//Example 2
//Setup: Equal
function compareEquality(a, b) {
    if (a == b) {
        return "Equal"
    }
    return "Not Equal";
}
console.log(compareEquality(10, "10"));

//Setup: Strictly Equal
function compareStrictEquality(a, b) {
    if (a === b) {
        return "Strictly Equal"
    }
    return "Not Strictly Equal";
}
console.log(compareStrictEquality(10, "10"));

//Comparison with the Strict Inequality Operator
function testStrictNotEqual(val) {
    if (val !== 17) {
        return "Not Equal"
    }
    return "Equal";
}
console.log(testStrictNotEqual(10));

//Comparisons with the Logical And Operator
function testGreaterThan(val) {
    if (val > 100) {
        return "Over 100"
    }
    return "10 or Under";
}
console.log(testGreaterThan(10));

//Comparison with the Greater Than Or Equal To Operator
function testGreaterOrEqual(val) {
    if (val >= 20) {
        return "20 or Over"
    }

    if (val >= 10) {
        return "10 or Over";
    }
    return "Less than 10";
}
console.log(testGreaterOrEqual(21));

//Comparisons with the Less Than Operator
function testLessThan(val) {
    if (val < 25) {
        return "Under 25"
    }

    if (val < 55 ) {
        return "Under 55";
    }
    return "55 or Over";
}
console.log(testLessThan(100));

//Comparisons with the Less Than Or Equal To Operator
function testLessOrEqual(val) {
    if (val <= 12) {
        return "Smaller than or Equal to 12"
    }

    if (val <= 24) {
        return "Smaller than or Equal to 24";
    }
    return "More than 24";
}
console.log(testLessOrEqual(5));

//Comparisons with the Logical And Operator: Sometimes you want to check if 2 things are true at the same time
function testLogicalAnd(val) {
    if (val <= 50 && val >= 25) {// && the And operator
        return "Yes";
    }
    return "No";
}
console.log(testLogicalAnd(10))

//Comparisons with the Logical Or Operator
function testLogicalOr(val) {
    if (val < 10 || val > 20) {// || the Or operator
        return "Outside";
    }
    return "Inside";
}
console.log(testLogicalOr(10))

//Else Statements 
function testElse(val) {
    var result = "";

    if (val > 5) {
        result = "Bigger than 5";
    }else {
        result = "5 or Smaller";
    }
    return result;
}
console.log(testElse(10))

//Else If Statements 
function testElseIf(val) {
    if (val > 10) {
        return "Greater than 10";
    }else if (val < 5) {
        return "Smaller than 5";
    }else {
        return "Between 5 and 10";
    }
}

console.log(testElseIf(10))

//Logical Order in If Else Statements: When you’re using else if statements order is very important
//Wrong order
function orderMyLogic(val) {
    if (val < 10) {
        return "Less than 10";
    }else if (val < 5) { // This is in the wrong order, 'cause if we put 3, it will reurn value is "Less than 10" instead of "Less than 5"
        return "Less than 5";
    }else {
        return "Greater than or equal to 10";
    }
}
console.log(orderMyLogic(11))
//Correct order
function orderMyLogic(val) {
    if (val < 5) {
        return "Less than 5";
    }else if (val < 10) { 
        return "Less than 10";
    }else {
        return "Greater than or equal to 10";
    }
}
console.log(orderMyLogic(7))

//Chaining If Else Statements 
function testSize(num) {
    if (num < 5) {
        return "Tiny";
    }else if (num < 10) { 
        return "Small";
    }else if (num < 15){
        return "Medium";
    }else if (num < 20) { 
        return "Large";
    }else {
        return "Huge";
    }
} 
console.log(testSize(7))

//
//Golf Code:  In the game of golf each hole has a par, Which means the average number of strokes you’re supposed to use to get the ball into the hole
var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home"]
function golfScore(par, strokes) {
    if (strokes == 1) {
        return names[0];
    }else if (strokes <= par - 2) { 
        return names[1];
    }else if (strokes == par - 1) { 
        return names[2];
    }else if (strokes == par) { 
        return names[3];
    }else if (strokes == par + 1) { 
        return names[4];
    }else if (strokes == par + 2) { 
        return names[5];
    }else {
        return names[6];
    }
} 
console.log(golfScore(3))   

//Switch Statements: Instead of using chained else if statements you can use a switch statement. A switch statement tests a value and can have many case statements which define various possible values.
function caseInSwitch(val) {
    var answer = "";
switch(val) {
    case 1:
        answer = "alpha";
        break;//Break means that we're at the end of that case statement. it just goes to the end of the switch statement and doesn’t evaluate anything else in the switch statement
    case 2:
        answer = "beta";
        break;
    case 3:
        answer = "gamma";
        break;
    case 4:
        answer = "delta";
        break;
    }

return answer;
}
console.log(caseInSwitch(4));

//Default Option in Switch Statements]
function switchOfStuff(val) {
    var answer = "";
switch(val) {
    case "a":
        answer = "apple";
        break;
    case "b":
        answer = "bird";
        break;
    case "c":
        answer = "cat";
        break;
    case "d":
        answer = "dog";
        break;
    default: //to return something anytime a, b, or c is not passed through
        answer = "stuff";
        break;
    }

return answer;
}
console.log(switchOfStuff("a"));
console.log(switchOfStuff(5));

//Multiple Identical Options in Switch Statements: multiple inputs give the same output by omitting the break statment
function sequentialSizes(val) {
    var answer = "";
    switch(val) {
        case 1:
        case 2:
        case 3:
            answer = "Low";
            break;
        case 4:
        case 5:
        case 6:
            answer = "Med";
            break;
        case 7:
        case 8:
        case 9:
            answer = "High";
            break;
        default:
            answer = "No Size";
            break;
    }
    return answer;
}
console.log(sequentialSizes(8)); // Returns "High"
console.log(sequentialSizes(0)); //Default Output: No Size
console.log(sequentialSizes(10));//Default Output: No Size

//Replacing If Else Chains with Switch
/* function chainToSwitch(val) {
    var answer = "";

    if (val === "bob") {
    answer = "Marley";
    } else if (val === 42) {
    answer = "The Answer";
    } else if (val === 1) {
    answer = "There is no #1";
    } else if (val === 99) {
    answer = "Missed me by this much!";
    } else if (val === 7) {
    answer = "Ate Nine";
    }
    return answer;
}
console.log(chainToSwitch(7)); */
//We are going to change the above chain of if stament to become a switch statment
function chainToSwitch(val) {
    var answer = "";

    switch(val) {
        case "bob":
            answer = "Marley";
            break;
        case 42:
            answer = "The Answer";
            break;
        case 1:
            answer = "There is no #1";
            break;
        case 99:
            answer = "Missed me by this much!";
            break;
        case 7:
            answer = "Ate Nine";
            break;
    }
    return answer;
}
console.log(chainToSwitch(99));

//Returning Boolean Values from Functions: here is a trick when you want a function to return a Boolean, a true or false value
/* function isLess(a, b) {
    if (a < b) {
        return true;
    }else {
        return false;
    }
}
console.log(isLess(16, 15)); */

function isLess(a, b) {
    return a < b;
}
console.log(isLess(16, 15));

//Returning Early Pattern from Functions
//Setup: The Math.pow() method returns the value of a base raised to a power.
function abTest(a, b) {
    if (a < 0 || b < 0) {
        return undefined;
    }

    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));

}
console.log(abTest(-2,2));

//Counting Cards: Blackjack card counting function. So, how card counting works is that: 
// when you see a low card, the count goes up. 
// And when you see a high card, the count goes down. 
// And if it’s a middle value card, the count stays the same.
// And then when the count is positive, the player should bet high.
// And then when the count is negative, the player should bet low.

var count = 0;

function cc(card) {
    switch(card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            count--;
            break;
    }
    var holdbet = 'Hold'
    if (count > 0) {
        holdbet = 'Bet'
    }

    var holdbet = 'Hold'
    if (count > 0) {
        holdbet = 'Bet'
    }
    return count + " " + holdbet;
}
cc(2); cc(4); cc("K"); cc(5); 
console.log(cc(4))

//Build Javascript Objects: Objects are similar to arrays except that instead of using indexes to access data, you use properties
var ourDog = {
    "name": "Camper", //the prperties are eveerything before the colons
    "legs": 4,
    "tails": 1,
    "friend": ["everything!"]
};
// There are two main ways to access a property on an object: Dot Notation & Bracket Notation
//Accessing Object Properties with Dot Notation

var testObj = {
    "hat": "ballcap",
    "shirt": "jersey"
};
var hatValue = testObj.hat;
var shirtValue = testObj.shirt;

//Accessing Object Properties with Bracket Notation
var testObj = {
    "an entree": "hamburger", //You can use bracket notation anytime but it is required if the name has a space in it, likewise, you cannot use variables in dot notation:
    "my side": "veggies",
    "my deink": "water"
};
var entreeValue = testObj["an eentree"];
var drinkValue = testObj['the drink'];

//Accessing Object Properties with Variables:Bracket notation can also be used to look up object properties using variables
 var testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
 };

 var playerNumber = 16
 var player = testObj[playerNumber];

 //Updating Object Properties
 var myDog = {
    "name": "Coder",
    "legs": 4,
    "tails": 1,
    "friend": ["freeCodeCamp Campers"]
};

myDog.name = "Happy Coder";

console.log(myDog); ; //output: name: 'Happy Coder', legs: 4, tails: 1, friend: Array(1)

//Add New Properties to an Object
var myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friend": "freeCodeCamp Campers"
};

myDog['bark'] = "woof-woof"; //using dot or bracket notation
console.log(myDog);

//Delete Properties From an Object:
var myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friend": "freeCodeCamp Campers",
    "bark": "woof-woof"
};

delete myDog['tails']; //using dot or bracket notation
console.log(myDog);
//Using Objects for Lookups
function pohoneticLookup(val) {
    var result = "";

    switch(val) {
        case "alpha":
            result = "Adams";
            break;
        case "bravo":
            result= "Boston";
            break;
        case "charlie":
            result = "Chicago";
            break;
        case "delta":
            result= "Denever";
            break;
        case "echo":
            result = "Easy";
            break;
        case "foxtrot":
            result= "Frank";
            break;
        default:
            result = "undefined";
            break;
    } 
    return result;
}
console.log(pohoneticLookup("gamma"));

//we can replace the above swtich statment with object and use object for lookup instead of the switch statment

var lookup = {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denever",
    "echo": "Easy",
    "foxtrot": "Frank"

};
result = lookup["val"];

console.log(pohoneticLookup("alpha"));

//Testing Objects for Properties: You can check if an object has a property with the hasown property method
var myObj = {
    gift: "pony",
    pet: "kitten",
    bed: "sleigh"
};
function checkObj(checkProp) {

    if (myObj.hasOwnProperty(checkProp)) {
        return myObj[checkProp]
    } else {
    return "Not Found"
    }
}
console.log(checkObj("Hello"));

//Manipulating Complex Objects: A Javascript object is a way to store flexible data. So, you can store strings, numbers, and arrays, and other objects. similar to JSON

var myMusic = [ //this is an Array because it has open bracket and closed bracket
    {
        "artist": "TTilahun Gessesse", //this is the First Obj
        "title": "Yehagere Shita",
        "release_year": 1970,
        "formats": [
            "CD",
            "8T",
            "LP"
        ],
        "gold": true
    },
    {
    "artist": "Teddy Afro", //this is the Second Obj
    "title": "Tikur Sew",
    "release_year": 2012,
    "formats": [
        "YouTube Video"
    ]
    }
]

//Accessing Nested Objects
//Setup
var myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        "outside": {
            "trunk": "jack"
        }
    }
};
/* var gloveBoxContents = undefined;
var gloveBoxContents = myStorage.car.inside["glove box"]; */
var gloveBoxContents = myStorage.car.outside.trunk;
console.log(gloveBoxContents)

//Accessing Nested Arrays: Array bracket notation can be changed to access nested arrays
//Setup
var myPlants = [
    {
        type: "flowers",
        list: [
            "rose",
            "tilip",
            "dandelion"
        ]
    },
    {
        type: "trees",
        list: [
            "fir",
            "pine",
            "brich"
        ]
    }
];
var secondTree = myPlants[1].list[1];
console.log(secondTree);


"2468": {
    "album": "1999",
    "artist": "Prince",
    "tracks": [
        "1999",
        "Little Red Corvette"
    ]
},
"1245": {
    "artist": "Robert Palmer",
    "tracks": []
},
"5439": {
    "album": "ABBA Gold"
}
};
var collectionCopy = JSON.parse(JSON.stringify(collection)); //JSON.parse and JSON.stringify is a way in Javascript to make a copy of the object

function updateRecords(id, prop, value) {
if (value === "") { //the first condition we are going to test for is if we need to delete the property; If the value is blank, we are going to delete collection
   delete collection[id][prop];
}else if (prop === "tracks") {
collection[id][prop] = collection[id][prop] || []; //if this already exists we're going to set it to equal itself; But if itself doesn’t exist, we'll just set it to equal an empty array
collection[id][prop].push(value); //if the value isn’t blank and the property isn’t tracks, then we just push the value onto the property.
} else {
collection [id][prop] = value;
}

return collection;
}
console.log(updateRecords(2468, "tracks", "test"));
console.log(updateRecords(5439, "artist", "ABBA"));

//Record Collection: coding challenge...
//Setup
var collection = {
    "2548": {
        "album": "Slippery When Wet",
        "artist": "Bon Jovi",
        "tracks": [
            "Let it Rock",
            "You Give Love a Bad Name"
        ]
    },
    "2468": {
        "album": "1999",
        "artist": "Prince",
        "tracks": [
            "1999",
            "Little Red Corvette"
        ]
    },
    "1245": {
        "artist": "Robert Palmer",
        "tracks": []
    },
    "5439": {
        "album": "ABBA Gold"
    }
};
var collectionCopy = JSON.parse(JSON.stringify(collection));

function updateRecords(id, prop, value) {
    if (value === "") { //if the value is blank, we delete that prop
       delete collection[id][prop];
    } else if (prop === "tracks") {//if the prop is tracks, we are going to push at the end of the arr
      collection[id][prop] = collection[id][prop] || []; //if the prop exist, it is going to equal itself OR if it doesn't exist we set it an empty arr
      collection[id][prop].push(value);
    } else {
      collection [id][prop] = value;
    }

    return collection;
}
updateRecords(2468, "tracks", "test");
console.log(updateRecords(5439, "artist", "ABBA"));


//Iterare with While Loops:  a while loop runs while a specified condition is true and stops once it’s no longer true
var myArray = [];
var i = 0;
while(i < 5) {
    myArray.push(i);
    i++;
}
console.log(myArray);

//Iterate with For Loops: A for loop is the most common type of loop in Javascript
var myArray = [];

for (var i = 1; i < 6; i++) {
    myArray.push(i);
}
console.log(myArray);

//Iterate Odd Numbers with a For Loop: Loops don’t just have to increment one at a time
var myArray = [];
for (var i = 1; i < 10; i += 2) {
    myArray.push(i);
}
console.log(myArray);

//Count Backwards with a For Loop
var myArray = [];
for (var i = 10; i > 0; i -= 2) {
    myArray.push(i);
}
console.log(myArray);

// to get all odd number
var myArray = [];
for (var i = 9; i > 0; i -= 2) {
    myArray.push(i);
}
console.log(myArray);

//Iterate Through an Array with a For Loop
var myArr = [2, 3, 4, 5, 6];
var total = 0;

for (var i = 0; i < myArr.length; i++) {
    total += myArr[i];
}
console.log(total);

//Nested for Loops: you can use nested for loops to access all the array elements
function multipliAll(arr) {
    var product = 1;
//nested for loops within this multiply all function to multiply every number in these nested arrays 
    for (var i = 0; i < arr.length; i++) {//for the outer for loop
        for (var j=0; j < arr[i].length; j++) {//
            product *= arr[i][j];
        }
    }

    return product;
}
var product = multipliAll([[1,2],[3,4],[5,6,7]]); //multidimensional array with an arrays inside the array; 3 elements in the 1st arr and each arr has its own set of elements
console.log(product);

//Iterate with Do…While Loops: A do while loop will always run at least one time and then it will check the condition
var myarray = [];
var i = 10;
 do {
    myArray.push(i);
    i++;
} while (i < 5)

console.log(i, myArray);

//Profile Lookup 
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Bronie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }

];
function lookUpProfile(name, prop) {
    for (var i = 0; i < contacts.length; i++) {
        if(contacts[i].firstName === name) {
            return contacts[i][prop] || "No such property";
        }
    }
    return "No such contact";
}

var data = lookUpProfile("Sherlock", "likes");

console.log(data)

//Generate Random Fractions
function randomFraction() {

    return Math.random();
}
console.log(randomFraction());

//Generate Random Whole Numbers
var randomNumberBetween0and20 = Math.floor(Math.random() * 20);

function randomWholeNum() {

    return Math.floor(Math.random() * 10);
}

console.log(randomWholeNum());

//Generate Random Whole Numbers within a Range

function randomRange(myMin, myMax) {

    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}

var myRandom = randomRange(5, 15);

console.log(myRandom);

//Use the parseInt Function: it takes string and returns integer
function convertToInteger(str) {
    return parseInt(str);
}
console.log(convertToInteger("56"));

//Use the parseInt Function with a Radix: The radix specifies the base of the number in the string, such as base 2 or base 7 or base 8. A base 2 would be binary  
function convertToInteger(str) {
    return parseInt(str, 2);//
}
console.log(convertToInteger("10011"));

//Use the Conditional (Ternary) Operator: 

/* function checkEqual(a, b) {
    if(a === b) {
        return true;
    }
    else {
        return false;
    }
}
*/
//we can replace the above if else statement into something using the ternary operator
/* function checkEqual(a, b) {
    return a === b ? true : false;
    }

console.log(checkEqual(1, 2));  */

function checkEqual(a, b) {
    return a === b;
}

console.log(checkEqual(1, 2)); 

//Use Multiple Conditional (Ternary) Operators: One of the great things about conditional or ternary operators is that you can nest them within each other which gives them even more power
function checkSign(num) {
    return num > 0 ? "positive" : num < 0 ? "negative" : "zero"

}
console.log(checkSign(-10));

//Differences Between the var and let Keywords
//For a long time in Javascript if you were going to declare a variable you had to use the var keyword. starting with ES6 in 2015 we can now declare variables with let and const as well. 
// 
let catName = "Quincy";
let quote;

catName = "Beau"; //Let does not let you declare a variable twice. This is one of the few reasons that many people only use let and const and never use var to declare variables. 

function catTalk() {
    "use strict"; //Now this enables strict mode which catches common coding mistakes and unsafe actions such as if you create a variable but didn't declare it with var, let or const

    catName = "Oliver";
    quote = catName + " says Meow!";
}

console.log(catTalk);

//Compare Scopes of the var and let Keywords
//when you declare a variable with var, it is declared globally or locally if declared inside a function. However, the scope of let is limited to the block statement or expression that it was declared in.
function checkScope() {
    "use strict"; 
   let i = "function scope"; //function scope
    if (true) {
        let i = "block scope";//block scope: a block is just anything inside these squiggly braces here
        console.log("Block scope i is: ", i);
    }
    console.log("Function scope i is: ", i); //this is outside the block scope, i.e., it's a function scope
    return i;
}
checkScope();

//Declare a Read-Only Variable with the const Keyword: const has all the features of let but it’s also read-only. You cannot reassign a const
function printManyTimes(str) {
    "use strict";

    const SENTENCE = str + " is cool!"; //If you declare a variable with the const keyword you cannot reassign it afterwards. If you know for sure that you never want to reassign a variable, always use const so you don’t accidentally reassign it when you don’t mean to. when you’re using const it’s very common to use all capital letters

    //sentence = str + " is amazing!";

    for(let i = 0; i < str.length; i+=2) {
        console.log(SENTENCE);
    }
}
printManyTimes("freeCodeCamp");

//Mutate an Array Declared with const: While you cannot reassign a variable declare with const you can mutate an array.
const s = [5,7,2];
function editInPlace() {
    "use strict";

    //s = [2, 5, 7];
    s[0] = 2;
    s[1] = 5;
    s[2] = 7;

}
editInPlace();

console.log(s);

//Prevent Object Mutation: object.freeze will prevent data mutation
function freezeObj() {
    "use strict";
    const MATH_CONSTANTS = {
        PI: 3.14
    };

    Object.freeze(MATH_CONSTANTS);

    //the ff is a try catch block
    try {
        MATH_CONSTANTS.PI = 99
    } catch( ex ) {
        console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}

const PI = freezeObj();

console.log(PI);


//Use Arrow Functions to Write Concise Anonymous Functions; Whenever you have an anonymous function you can convert it into an arrow function.
/* var magic = function() {
    return new Date();
}; */

const magic = () => new  Date();

//Write Arrow Functions with Parameters
var myConcat = function(arr1, arr2) {
    return arr1.concat(arr2);
};

console.log(myConcat([1,2], [3,4,5]));

//=>

var myConcat = (arr1, arr2) => arr1.concat(arr2);

console.log(myConcat([1,2], [3,4,5]));

//Write Higher Order Arrow Functions
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];

const squareList = (arr) => {
    const squaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x); //Filter and map functions to filter out everything that’s not a positive integer; We don't need parenthesis for a single arrow function. The map function takes a function as its argument But instead of writing a full function out we can use an arrow function
    return squaredIntegers;
};

const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);

// Write Higher Order Arrow Functions
const increment = (function() {
    return function increment(number, value = 1) {
        return number + value;
    };
})();
console.log(increment(5, 2));
console.log(increment(5));

//Use the Rest Operator with Function Parameters
/* const sum = (function() {
    return function sum(x, y, z) {
        const args = [x, y, z];
        return args.reduce((a, b) => a + b, 0);
    };
})(); */
const sum = (function() {
    return function sum(...args) {
        return args.reduce((a, b) => a + b, 0);
    };
})();
console.log(sum(1, 2, 3, 4));

//Use the Spread Operator to Evaluate Arrays In-Place: The spread operator looks just like the rest operator; Three dots. But it expands an already existing array.
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function() {
    arr2 = [...arr1];
    arr1[0] = 'potato'
})();
console.log(arr2);

//Use Destructuring Assignment to Assign Variables from Objects
var voxel = {x: 3.6, y: 7.4, z: 6.54};

//if we want to take each individual element in this object and assign it to its own variable, the ff voxel variable is the old way of doing it.
/* var x = voxel.x; // x = 3.6
var y = voxel.y; // y = 7.4
var z = voxel.z; // z = 6.54 */

//with destructuring, there’s a simpler and quicker way to assign variables for each element in an object as follow
const { x : a, y : b, z : c } = voxel; // a = 3.6, b = 7.4, c = 6.54


const AVG_TEMPERATURES = {
    today: 77.5,
    tomorrow: 79
};

function getTempOfToday(avgTemperatures) {
    "use strict";
    const { today : tempOfToday } = avgTemperatures;

    return tempOfToday
}

console.log(getTempOfToday(AVG_TEMPERATURES));

//Destructuring Assignment with Nested Objects
const LOCAL_FORECAST = {
    today: { min: 72, max: 83 },
    tomorrow: { min: 73.3, max: 84.6 }
};

function getMaxOfTmrw(forecast) {
    "use strict";

    const { tomorrow : { max : maxOfTomorrow }} = forecast;

    return maxOfTomorrow;
}

console.log(getMaxOfTmrw(LOCAL_FORECAST));

//Use Destructuring Assignment to Assign Variables from Arrays
//The difference between destructuring from arrays and destructuring from objects is that you cannot specify which element from the array to go into a variable.

const [z, x, , y] = [1, 2, 3, 4, 5, 6];
console.log(z, x, y);
//

let a = 8, b = 6;
(() => {
    "use strict";
    [a, b] = [b, a]
})();

console.log(a);
console.log(b);

//Use Destructuring assignment with the Rest Operator to reassign array elements. 
const source = [1,2,3,4,5,6,7,8,9,10]
function removeFirstTwo(list) {

    const [ , , ...arr] = list; // two commas before the rest element to do nothing about the first two elemets

    return arr;
}
const arr = removeFirstTwo(source);
console.log(arr);
console.log(source);

//Use Destructuring Assignment to Pass an Object as a Function’s Parameters
//This is commonly used with API calls. When you are getting information from an Ajax request or an API request, it will often have a lot more information than what you need
const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
};
const half = (function() {

    return function half({ max, min}) {
        return (max + min) / 2.0;
    };
})();

console.log(stats);
console.log(half(stats));


//Create Strings using Template Literals


//template literal with multi-line and string interpolation
//A few advantages of using these template literals, these backticks instead of quotation marks, are one, you can make multiline strings.
//Another thing is you can add single or double quotation marks right in the string and you don’t have to escape them. 
//The third thing is you can put variables right in the string.
const person = {
    name: "Zodiac Hasbro",
    age: 56
};
const greeting = 'Hello, my name is ${person.name}! I am ${person.age} years old.';

console.log(greeting);

const result = {
    success: ["max-length", "no-amd", "prefer-arrow-function"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["id-blacklist", "no-dup-keys"]
};
function makeList(arr) {
    const resultDisplayArray = [];
    for (let i = 0; i < arr.length; i++) {
        resultDisplayArray.push('<li class="text-warning">${arr[i]}</li>')
    }

    return resultDisplayArray;
}
const resultDisplayArray = makeList(result.failure);
console.log(resultDisplayArray);

//Write Concise Object Literal Declarations Using Simple Fields
//ES6 added some nice support for easily defining object literals. If we look at this function here, this function is an arrow function.
/* const createPerson = (name, age, gender) => {

        return {
        name: name,
        age: age,
        gender: gender
    };

}; */

//If you know that you want to create an object where the key is the name of the variable and the value is the value of the variable
const createPerson = (name, age, gender) => ( { name, age, gender } );
console.log(createPerson("Zodiac Hasbro", 56, "male"));

//Write Concise Declarative Functions

/* const bicycle = {
    gear: 2,
    setGear: function(newGear) {
        "use strict";
        this.gear = newGear;
    }
};
bicycle.setGear(3);
console.log(bicycle.gear); */
//
const bicycle = {
    gear: 2,
    setGear(newGear) {
        "use strict";
        this.gear = newGear;
    }
};
bicycle.setGear(3);
console.log(bicycle.gear);
//Use class Syntax to Define a Constructor Function

/* var SpaceShuttle = function(targetPlanet) {
    this.targetPlanet = targetPlanet;
}

var zeus = new SpaceShuttle('Jupiter');

console.log(zeus.targetPlanet); */

//ES6 provides a syntax to create objects using the class keyword. The class syntax replaces the constructor function creation

class SpaceShuttle {
    constructor(targetPlanet) {
        this.targetPlanet = targetPlanet;
    }
}

var zeus = new SpaceShuttle('Jupiter');

console.log(zeus.targetPlanet);

//example for veg

function makeClass() {
    class Vegetables {
        constructor(name){
            this.name = name;
        }
    }
    return Vegetables;
}
const Vegetable = makeClass();
const carrot = new Vegetable('carrot');
console.log(carrot.name);

//Use getters and setters to Control Access to an Object
class Book {
    constructor(author) {
        this._author = author;
    }
    //getter
    get writer() {
        return this._author;
    }
    //setter
    set writer(updatedAuthor) {
        this._author = updatedAuthor
    }
}

function makeClass() {
    class Thermostat {
        constructor(temp) {
            this._temp = 5/9 * (temp - 32);//whenever you start a variable with an _  it’s a private variable
        }
        get temperature() {
            return this._temp;
        }
        set temperature(updatedTemp) {
            this._temp = updatedTemp;
        }
    }

    return Thermostat;
}

const Thermostat = makeClass();
const thermos = new Thermostat(76);
let temp = thermos.temperature; //generally, if something is a function, you would see parenthesis after the function name, but if it’s a variable or a property name, it’s going to not have parenthesis.
thermos.temperature = 26;
temp = thermos.temperature;

console.log(temp)

//Understand the Differences Between import and require
import {  capitalizeString } from "sring_function" //use ./ if it is the same directory
const cap = capitalizeString("hello!");

console.log(cap);

//Use export to Reuse a Code Block
const capitalizeString = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}


export { capitalizeString };

export const foo = "bar";
export const bar = "foo";

//Use * to Import Everything from a File
import * as capitalizeStrings from "capitalize_string";

//Create an Export Fallback with export default: often used if you only want to export one thing from a file
export default function subtract(x,y) {return x - y;}

//Import a Default Export]
import subtract from "math_functions";

subtract(7, 4);