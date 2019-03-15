//UNIVERSAL BEGIN//
function brs(num) {
  let returnStr = ' '
  for (i = 0; i < num; i++){
    returnStr = returnStr + '<br/>'
  }
  return returnStr
}
function returnTitle() {
  location.href='./index.html'
}
//UNIVERSAL END//
//AIT BEGIN//
function ait() {
  let content = document.getElementById('contentdiv')

}
//AIT END//
//APA BEGIN//
function apa() {
  let content = document.getElementById('contentdiv')

}
//APA END//
//MAGNET START//
function magnet() {
  let content = document.getElementById('contentdiv')

}
//MAGNET END//
//UCTECH START//
function uctech() {
  location.href='uctech.html'
}
function uctech1() {
  let text = 'UCTECH has a variety of vocations to choose from. Which one will you choose?'
  let content = document.getElementById('contentdiv')
  let brStr = brs(5);
  content.innerHTML = (brStr + text + brStr);
}
function sustainable() {
  location.href='sustainable.html'
}
function culinary() {
  location.href='culinary.html'
}
function lawandjustice() {
  location.href='lawandjustice.html'
}
function mugging() {
  location.href='mugging.html'
}
function mugging1() {
  let text = 'You swing to the scene of the crime and find Mr. Blokus being mugged by a man in a mask. You battle it out with the masked man until he surrenders and reveals himself to be MR. LOBRACE!'
  let content = document.getElementById('contentdiv')
  let brStr = brs(5);
  content.innerHTML = (brStr + text + brStr);
}
//UCTECH END//
//AAHS BEGIN//
function aahs() {
  location.href='aahs.html'
}
function aahs1() {
    let text = 'You walk into Allied and find a student collapsed on the floor. What will you do?'
    let content = document.getElementById('contentdiv')
    let brStr = brs(5);
    content.innerHTML = (brStr + text + brStr);
}
function ignore() {
  location.href='ignore.html'
}
function tryandhelp() {
  location.href='tryandhelp.html'
}
function getprohelp() {
  location.href='getprohelp.html'
}
//AAHS END//
