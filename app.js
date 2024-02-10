var str = prompt("Enter a word to check, it's palindrome word or not palindrome word. e.g. civic = civic")
var splitedStr = str.split("").join("");

var result = [];

for (var i = splitedStr.length - 1; i >= 0; i--) {

    result = result + splitedStr[i]
}

if (str == result) {

    alert("✔ " + str + " is a Palindrome Word!")

} else {

    alert("❌ "+ str + " is not a Palindrome Word!")
}
