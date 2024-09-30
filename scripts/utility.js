// for hide element...
function hideElementById(elementId){
    const element = document.getElementById(elementId)
    element.classList.add('hidden')
}

// for show element...
function showElementById(elementId){
    const element = document.getElementById(elementId)
    element.classList.remove('hidden')
}

// add background color...
function addBackgroundColorById(elementId){
    const element = document.getElementById(elementId)
    element.classList.add('bg-orange-400')
}

// remove background color...
function removeBackgroundColorById(elementId){
    const element = document.getElementById(elementId)
    element.classList.remove('bg-orange-400')
}

// Generate Random Alphabet...
function getRandomAlphabet(){
    // create a alphabet array...
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz'
    const alphabets = alphabetString.split('')
    
    // get a random index between 0 to 25...
    const randomNum = (Math.random()*25)
    const index = Math.round(randomNum)

    const alphabet = alphabets[index]
    return alphabet
}