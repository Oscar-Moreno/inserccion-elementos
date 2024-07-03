// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

// - Usando cualquiera de los tres HTML que te doy, haz que al hacer click en el botón se vayan añadiendo items con el texto Item 1, Item 2, Item 3,... Los item deben llevar el número correspondiente independiente de qué HTML hayas elegido

const buttonElement = document.getElementById('boton')

const clickButton = ()=>{
    if(buttonElement.addEventListener('click')){
        const newText = document.createElement('h1')
        newText.textContent='Item 2'
    }
    console.log(clickButton)
}



const createColorChangeDiv = ()=>{
const newDivElement = document.createElement('div')
const redButton = documnet.createElement('button') 
    redButton
}

// ## Inserción múltiple

// - Crea una función que sea capaz de generar 25 números aleatorios y los devuelva.
const random25Numbers = ()=>{
    const randomNumbers =[]
  for(let i=0;i<25;i++){
    const randomNumber = Math.floor(Math.random()*50)
    randomNumbers.push(randomNumber)
  }
    return randomNumbers
}



// - Crea una función que reciba los 25 números aleatorios que has creado en el ejercicio anterior y genere e inserte en el DOM 2 listas, una con números pares y otra con números impares.

const evenOddList = ()=>{
    // const fragmentEven = document.createDocumentFragment()
    // const fragmentOdd = document.createDocumentFragment()
    const fragment = document.createDocumentFragment()
    const oddList = document.createElement('ul')
    const evenList = document.createElement('ul')
    const numbers = random25Numbers()

    for(const number of numbers){
        const newLi = document.createElement('li')
        newLi.textContent-number
        if(number % 2 === 0){
            evenList.append(newLi)
        }else{
            oddList.append(newLi)
        }
    }

    fragment.append(evenList, oddList)
    document.body.append(fragment)

}

evenOddList()

// - Con esta estructura, crea una función que, a medida que vayas escribiendo, te ponga dentro de la lista:


const listOneElement = document.getElementById('list-one')
const inputElement = document.getElementById('text')

 const analizeInput = value =>{
    const vowels= 'aeiouáéíóú'
    const numberOfCharacters = value.lenght
    let numberOfVowels = 0
    let numberOfConsonants = 0
    let numberOfSpaces = 0
    
    for(const letter of value){
        if(vowels.includes(letter)){
            numberOfVowels++
        }else if ( letter === ' '){
            numberOfSpaces++
        }else{
            numberOfConsonants++
        }
    }

    const fragment =document.createDocumentFragment()

    const newLiCharacters = document.createElement('li')
    newLiCharacters.textContent= `El texto tiene ${numberOfCharacters} caracteres`

    const newLiVowels = document.createElement('li')
    newLiVowels.textContent= `El texto tiene ${numberOfVowels} vocales`

    const newLiConsonants = document.createElement('li')
    newLiConsonants.textContent= `El texto tiene ${numberOfConsonants} consonantes`

    const newLiSpaces = document.createElement('li')
    newLiSpaces.textContent= `El texto tiene ${numberOfSpaces} espacios`

    fragment.append(newLiCharacters,newLiVowels,newLiConsonants,newLiSpaces)
    listOneElement.append(fragment)
    

    // console.log('Characters', numberOfCharacters)
    // console.log('Vowels', numberOfVowels)
    // console.log('Consonants', numberOfConsonants)
    // console.log('Spaces', numberOfSpaces)

 }
//   - El texto tiene X caracteres.
//   - El texto tiene X vocales.
//   - El texto tiene X consonantes.
//   - Has introducido X espacios

inputElement.addEventListener('input', event => {
    analizeInput(event.target.value)
})