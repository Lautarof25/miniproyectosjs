const rooting = document.querySelector("#rooting")

function removeCharacter() {
  rooting.innerHTML = ""
}

function addCharacter(number) {
  switch (number) {
    case 1:
      rooting.innerHTML = `
        <p class="bubble speech text-end bg-white rounded p-1">Muy bien, están muy cerca de conseguirlo!</p>
        <img src="./source/img/character_1.png" alt="rooting character">
        `
      break;
    case 2:
      rooting.innerHTML =
        `
        <img src="./source/img/character_2.png" alt="rooting character">
        <p class="bubble speech bg-white rounded p-1">¡Solo falta acomodar los números!</p>
        `
      break;
    case 3:
      rooting.innerHTML =
        `
        <img src="./source/img/character_2.png" alt="rooting character">
        <p class="bubble speech bg-white rounded p-1"></p>
        `
      break;

    default:

      break;
  }
}

function character(num) {
  if (checkOk(num) == digitLimit - 1 && checkIndex(num) < digitLimit) {
    rooting.classList.remove("opacity")
    rooting.classList.add("appear")
    addCharacter(1)
    setTimeout(() => {
      rooting.classList.add("opacity")
      rooting.classList.remove("appear")
      removeCharacter()
    }, 3000);
  } else if (checkOk(num) == digitLimit && checkIndex(num) <= digitLimit - 2) {
    rooting.classList.remove("opacity")
    rooting.classList.add("appear")
    addCharacter(2)
    setTimeout(() => {
      rooting.classList.add("opacity")
      rooting.classList.remove("appear")
      removeCharacter()
    }, 3000);
  }
}