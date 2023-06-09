const rows = document.querySelector("#rows")
const numberGuess = document.querySelector("#numberGuess")

numberGuess.focus()

const digitNumber = 4;

function checkOk(num) {
  let count = 0
  // retorna la cantidad de correctos que hay
  let numToArray = num.toString().split("")
  let randomToArray = randomDigit.split("")
  for (i = 0; i < digitNumber; i++) {
    const index = randomToArray.indexOf(numToArray[i]);
    if (randomToArray.includes(numToArray[i])) {
      randomToArray.splice(index, 1);
      numToArray.shift(numToArray[i])
      i--
      count++
    }
  }
  return count
}

function checkIndex(num) {
  // retorna la cantidad de numeros en posición correcta
  let count = 0
  let numToString = num.toString()
  let randomToString = randomDigit
  for (i = 0; i < digitNumber; i++) {
    if (numToString[i] == randomToString[i]) {
      count++
    }
  }
  return count
}

numberGuess.addEventListener("keypress",guess)

function templateRow(attemps){
  let row = `
  <div id="row${attemps}" class="row bg-white rowAnimation text-center">
    <div id="colNum${attemps}" class="col-6 border"></div>
    <div id="colOk${attemps}" class="col-3 border"></div>
    <div id="colPos${attemps}" class="col-3 border"></div>
  </div>
  `
  return row
}

function guess(e){
  let inputLength = e.target.value.length;
  const enterKey = e.key === 'Enter';
  const zeroAttemps =  attemps > 0;
  if (enterKey && inputLength == digitNumber && zeroAttemps) {
    let num = e.target.value;
    rows.innerHTML += templateRow(attemps)
    document.querySelector(`#colNum${attemps}`).innerText = num
    document.querySelector(`#colOk${attemps}`).innerText = checkOk(num)
    document.querySelector(`#colPos${attemps}`).innerText = checkIndex(num)
    attemps--
    displayMessage(num)
    numberGuess.value = ""
    if(checkOk(num) == 3){
      
    }
  }
  spanAttemps.innerText = attemps
}

  // Refactorizar
  // Agregar efectos al ganar o perder
  // Agregar pistas con acertijos
  // Agregar pista cuando hay un numero repetido
  // Agregar un comentario cuando se está próximo a resolverlo (3 ok y +2 en pos)
  // Agregar filtros para jugar de manera infinita (después de ganar un juego)
  // Agregar modal
