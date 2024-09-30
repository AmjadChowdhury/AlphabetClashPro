function handleKeyPress(event){
    const keyPressed = event.key

    const currentAlphabet = document.getElementById('currentAlphabet')
    const alphabet = currentAlphabet.innerText
    const expectedAlphabet = alphabet.toLowerCase()

    if(keyPressed == expectedAlphabet){
        console.log('Dui Dui e mile gese...')
    }
    else{
        console.log('Kichui mile nai')
    }
}

document.addEventListener('keyup',handleKeyPress)


function continueGame(){
    // step 1: generate a random alphabet..
    const alphabet = getRandomAlphabet()

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