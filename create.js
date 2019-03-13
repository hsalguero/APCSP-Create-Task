
function brs(num) {
  let returnStr = ' '
  for (i = 0; i < num; i++){
    returnStr = returnStr + '<br/>'
  }
  return returnStr
}
//

function ait() {
  let content = document.getElementById('contentdiv')

}
function apa() {
  let content = document.getElementById('contentdiv')

}
function magnet() {
  let content = document.getElementById('contentdiv')

}
function uctech() {
  text = 'UCTECH has a variety of vocations to choose from. Which one will you choose?'
  let content = document.getElementById('contentdiv')
  let brStr = brs(5);
  content.innerHTML = (brStr + text + brStr);
}
function aahs() {
  location.href='aahs.html'
}
function aahs1() {
    text = 'You walk into Allied and find a student collapsed on the floor. What will you do?'
    let content = document.getElementById('contentdiv')
    let brStr = brs(5);
    content.innerHTML = (brStr + text + brStr);
}
function ignore() {
  location.href='ignore.html'
}
function returnTitle() {
  location.href='./index.html'
}
