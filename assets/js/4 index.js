const figure1 = document.querySelector('#figure1')
const figure2 = document.querySelector('#figure2')
const figure3 = document.querySelector('#figure3')
const figure4 = document.querySelector('#figure4')
const colorSample = document.querySelector('#selected-color')

//la variable global que guardará el color seleccionado en la siguiente función es:
let color

document.addEventListener('keydown', function (event) {

    if (event.key === 'a' || event.key === 'A') {
        color = 'greenyellow'
    } else if (event.key === 's' || event.key === 'S') {
        color = 'orange'
    } else if (event.key === 'd' || event.key === 'D') {
        color = 'blueviolet'
    } else {
        alert("Solo las teclas A-S-D seleccionan un color")
    }

    colorSample.style.backgroundColor = color //muestra al usuario el color elegido
})


//función para utilizar en el evento click:
function paint(figure) {
    figure.style.backgroundColor = color
}

//evento click para pintar cada figura:
figure1.addEventListener('click', function () {
    paint(figure1)
})
figure2.addEventListener('click', function () {
    paint(figure2)
})
figure3.addEventListener('click', function () {
    paint(figure3)
})
figure4.addEventListener('click', function () {
    paint(figure4)
})

