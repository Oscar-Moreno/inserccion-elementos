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