function continueGame(){
    // step 1: generate a random alphabet..
    const alphabet = getRandomAlphabet()
    console.log(alphabet)

    // step 2: Set randomly generated alphabet to the screen(show it)
    const currentAlphabet = document.getElementById('currentAlphabet')
    currentAlphabet.innerText = alphabet
   
    // step 3: add background color in kbd..
    addBackgroundColorById(alphabet)
}

function play(){
    hideElementById('home-screen')
    showElementById('playGround')
    continueGame()
}