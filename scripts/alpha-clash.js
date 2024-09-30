function handleKeyPress(event){
    const keyPressed = event.key

    const currentAlphabet = document.getElementById('currentAlphabet')
    const alphabet = currentAlphabet.innerText
    const expectedAlphabet = alphabet.toLowerCase()

    if(keyPressed == expectedAlphabet){
        console.log('Dui Dui e mile gese...')
        // Update score
        // 1. get the current score
        const currentScore = getTextElementById('currentScore')
        // 2. increase the score by 1
        const newScore = currentScore + 1
        // 3. show the updated score 
        setTextElementById('currentScore',newScore)


        removeBackgroundColorById(keyPressed)
        continueGame()
    }
    else{
        console.log('Kichui mile nai')
        // Step 1:get the current life number
        const currentLife = getTextElementById('currentLife')
        // step 2:reduce the life count
        const newLife = currentLife - 1
        // step 3:display the updated life count
        setTextElementById('currentLife',newLife)

        if(newLife == 0){
            console.log('Game over')
            gameOver()
        }
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
    // hide everything,show only playground..
    hideElementById('home-screen')
    hideElementById('final-score')
    showElementById('playGround')

    // reset score and life...
    setTextElementById('currentScore',0)
    setTextElementById('currentLife',5)
    continueGame()
}

function gameOver(){
    hideElementById('playGround')
    showElementById('final-score')
}