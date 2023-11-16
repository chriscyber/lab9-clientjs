//Here is where you will do all of the logic and processing for the palindrome and prime checking.
(function () {
  // //function testPalindrome() {
  // console.log("we're at testPalindrome()");
  alert("clicked");
  // //TODO: Parse input and delimit by commas, or allow commas in regex
  // let resultArr = [];
  // let countTrues = 0;

  // str = str.toLowerCase().trim();
  // console.log(str);
  // str = str.replace(/[^0-9a-z]/gi, "");
  // console.log(str);

  // let strReversed = str.split("").reverse().join("");
  // // str.forEach((char, index) => {
  // //   if (!isAlphanumeric(char)) {
  // //     char.replace(char, "");
  // //   }
  // // });

  // //let isPalindrome =
  // //compare
  // if (str === strReversed) {
  //   resultArr.push(true);
  //   countTrues++;
  // } else {
  //   resultArr.push(false);
  // }
  // //  return resultArr;
  // //}

  // // testPrime(x) {
  // //   return x;
  // // },

  // // isAlphanumeric(str) {
  // //   return /^[a-zA-Z0-9]+$/.test(str);
  // // },

  let form = document.getElementById("form");
  let input = document.getElementById("palindrome_input");
  input.focus();
  let errorDiv = document.getElementById("error");
  let ol = document.getElementById("list");
  let formLabel = document.getElementById("formLabel");

  if (form) {
    form.addEventListener("submit", (event) => {
      console.log("submitted!");
      event.preventDefault(); //prevent from going to server
      if (input.value.trim()) {
        input = input.value;
        input.classList.remove("inputClass");
        errorDiv.hidden = true;
        formLabel.classList.remove("error");
        let li = document.createElement("li");
        //call test?
        //let palidromeArr = testPalindrome(inputText);
        li.innerHTML = input; //palindromeArr;
        ol.appendChild(li);
        form.reset();
        input.focus();
      } else {
        input.value = "";
        errorDiv.hidden = false;
        errorDiv.innerHTML = "You must enter a value";
        formLabel.className = "error";
        input.focus();
        input.className = "inputClass";
      }
    });
  }
  //}
})();
//export default exportedMethods;
//export default { testPalindrome };

//Credits:
// https://www.freecodecamp.org/news/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb/
// https://javascript.plainenglish.io/check-if-string-is-alphanumeric-in-javascript-e325caa3ee
//
