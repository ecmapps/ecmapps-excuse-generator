/* eslint-disable */
/*import "bootstrap";*/
import "./style.css";

window.onload = function() {
  //write your code here

  document.getElementById("excuse").innerHTML = newExcuse();
};
function newExcuse() {
  let str = "";
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class.",
    "right on time.",
    "when I finished.",
    "during my lunch.",
    "while I was praying."
  ];
  let words = [who, action, what, when];
  for (let i = 0; i < words.length; i++) {
    let randomNumber = Math.floor(Math.random() * words[i].length);
    str += words[i][randomNumber];
    //Adding a space between words below except to the last one.
    if (i + 1 < words.length) {
      str += " ";
    }
  }

  return str;
}
