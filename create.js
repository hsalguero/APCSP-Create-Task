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
function culinary1() {
  let text = 'There are several dishes you can cook. Which one would you like to make?'
  let content = document.getElementById('contentdiv')
  let brStr = brs(5);
  content.innerHTML = (brStr + text + brStr);
}
function pizza() {
  location.href='pizza.html'
}
function fish() {
  location.href='fish.html'
}
function casserole() {
  location.href='casserole.html'
}
function lawandjustice() {
  location.href='lawandjustice.html'
}
function lawandjustice1() {
  let text = 'You are taken into the questioning by the teacher and eventually charged for conspiracy to distribute illegal brownies for your relay team. Will you accept your mistake and go to jail, or fight it in court?'
  let content = document.getElementById('contentdiv')
  let brStr = brs(5);
  content.innerHTML = (brStr + text + brStr);
}
function jail() {
  location.href='jail.html'
}
function court() {
  location.href='court.html'
}
function mugging() {
  location.href='mugging.html'
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
