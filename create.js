
function brs(num) {
  let returnStr = ' '
  for ( i = 0; i < num; i++){
    returnStr = returnStr + '<br/>'
  }
  return returnStr
}
function ait() {
  let content = document.getElementById("contentdiv")

}
function apa() {
  let content = document.getElementById("contentdiv")

}
function magnet() {
  let content = document.getElementById("contentdiv")

}
function uctech() {
  let content = document.getElementById("contentdiv")

}
function aahs() {
  text = "You walk into Allied and find a student collapsed on the floor. What will you do?"
  let content = document.getElementById("contentdiv")
  let brStr = brs(5);
  content.innerHTML = (brStr + text + brStr);
}
