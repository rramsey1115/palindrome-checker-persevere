const input = document.getElementById("input");
const checkButton = document.getElementById("check-btn");
const clearButton = document.getElementById("clear-btn");
const isPalindromeList = document.getElementById("is-palindrome-list");
const notPalindromeList = document.getElementById("not-palindrome-list");
const resultDiv = document.getElementById("result");
const resultsGraph = document.getElementById("results-graph");
const isPalListTitle = document.getElementById("is-pal-list-title");
const notPalListTitle = document.getElementById("not-pal-list-title");
let isPalindromeCount = 0;
let notPalindromeCount = 0;

const isPalindrome = (string) => {
  const stringArray = string.toLowerCase().match(/[a-z0-9]/gi);
  if (stringArray === null) {
    resultDiv.innerHTML = "<h3>Please input alpha-numeric characters</h3>";
    input.value = "";
    return;
  }
  stringArray.reverse();
  if (stringArray.join("") === stringArray.reverse().join("")) {
    isPalindromeCount++;
    resultDiv.innerHTML = `<p>Nice! <span class="input-string">${string}</span> is a palindrome.</p>`;
    isPalindromeList.innerHTML += `<li>${string}</li>`;
    isPalListTitle.innerText = `Palindromes - ${isPalindromeCount}`;
    input.value = "";
    resultsGraph.className = "visible";
  } else {
    notPalindromeCount++;
    resultDiv.innerHTML = `<p>Unfortunately, <span class="input-string">${string}</span> is NOT a palindrome.</p>`;
    notPalindromeList.innerHTML += `<li>${string}</li>`;
    notPalListTitle.innerText = `Not Palindromes - ${notPalindromeCount}`;
    input.value = "";
    resultsGraph.className = "visible";
  }
};

checkButton.addEventListener("click", () => {
  if (input.value === "") {
    window.alert("Please input a value.");
  } else {
    isPalindrome(input.value);
  }
});

clearButton.addEventListener("click", () => {
  isPalindromeCount = 0;
  resultsGraph.className = "hidden";
  isPalListTitle.innerText = "Palindromes";
  notPalListTitle.innerText = "Not Palindromes";
  notPalindromeCount = 0;
  input.value = "";
  resultDiv.innerHTML = `<p>Your result will appear here...</p>`;
  isPalindromeList.innerHTML = "";
  notPalindromeList.innerHTML = "";
});
