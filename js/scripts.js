$(document).ready(function() {
  $("#palindrome").submit(function(event) {
    event.preventDefault();
    const palindrome = $("input#word").val().replace(/[^\w\s]|_/g, "").toLowerCase();
    const word1 = palindrome.replace(/ /g, ""); 
    const word2 = word1.split("").reverse().join("");
//    const word2 = palindrome.join("");
  
    console.log(palindrome, word1, word2);

    if (word1 === word2) {
      $(".results").append("<h1>PALINDROME!</h1>");
    } else {
      $(".results").append("<h1>NOT A PALINDROME!</h1>");
    }
  });
});