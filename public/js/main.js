//Here is where you will do all of the logic and processing for the palindrome and prime checking.
//(function () {
function testPalindrome(str) {
  let resultArr = [];
  // let countTrues = 0;

  str = str.toLowerCase().trim();
  console.log(str);
  //remove non-alphanumeric and split to array of strings delimiting by commas
  strArr = str.replace(/[^0-9a-z,]/gi, "").split(",");
  console.log(strArr);

  //let strReversed = str.split("").reverse().join("");

  strArr.forEach((word, index) => {
    if (word === word.split("").reverse().join("")) {
      resultArr.push(true);
    } else {
      resultArr.push(false);
    }
  });
  console.log(resultArr);
  console.log(resultArr.length);

  return resultArr;
}

function isPrime(x) {
  if (x === 1) return false;
  for (let i = 2; i < x; i++) {
    if (x % i === 0) {
      return false;
    }
    return true;
  }
}

// isAlphanumeric(str) {
//    return /^[a-zA-Z0-9]+$/.test(str);
// }

let form = document.getElementById("form");
let input = document.getElementById("palindrome_input");
input.focus();
let errorDiv = document.getElementById("error");
let ol = document.getElementById("palindromes");
let formLabel = document.getElementById("formLabel");

if (form) {
  form.addEventListener("submit", (event) => {
    console.log("submitted!");
    event.preventDefault(); //prevent from going to server
    if (input.value.trim()) {
      input.classList.remove("input");
      errorDiv.hidden = true;
      formLabel.classList.remove("error");
      let li = document.createElement("li");
      textToCheck = input.value;
      //call test
      let palindromeArr = testPalindrome(textToCheck);
      console.log(palindromeArr.length);
      //li.innerHTML = input.value; //palindromeArr;
      li.innerHTML = JSON.stringify(palindromeArr);
      ol.appendChild(li);
      console.log(palindromeArr.length);
      li.className = isPrime(palindromeArr.length) ? "prime" : "not-prime";
      form.reset();
      input.focus();
    } else {
      input.value = "";
      errorDiv.hidden = false;
      errorDiv.innerHTML =
        "You must enter at least one value (comma-separated for more than one)";
      formLabel.className = "error";
      input.focus();
      input.className = "inputClass";
    }
  });
}
//}
//})();
//export default exportedMethods;
//export default { testPalindrome };

//Credits:
// https://www.freecodecamp.org/news/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb/
// https://javascript.plainenglish.io/check-if-string-is-alphanumeric-in-javascript-e325caa3ee
//
