// ! Document Variables
let container = document.getElementById("container");
let hexcode = document.getElementById("hexcode");
// ! Randomizer
function flip() {
    let colorArray = [];
    let colorStr;
    const hexCharacters = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]

    function getCharacter(index) {
        return hexCharacters[index];
    }
    for (let i = 0; i < 6; i++) {
        let randomNumber = Math.round(Math.random() * 15);
        colorArray.push(getCharacter(randomNumber));
    }
    for (let i = 0; i < colorArray.length; i++) {
        colorArray[i] = colorArray[i].toString();
    }
    colorStr = "#" + colorArray.join("");
    // ! Execution
    container.style.backgroundColor = colorStr;
    hexcode.innerHTML = colorStr;
}
