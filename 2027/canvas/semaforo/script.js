let canvas = document.getElementById('canvas')
let contexto = canvas.getContext('2d')

function trafficLight() {
    contexto.fillStyle = 'black'
    contexto.fillRect(160, 100, 80, 200)

    //red
    contexto.beginPath()
    contexto.arc(200, 140, 20, 0, Math.PI * 2)
    contexto.fillStyle = 'darkred'
    contexto.fill()

    //yellow
    contexto.beginPath()
    contexto.arc(200, 200, 20, 0, Math.PI * 2)
    contexto.fillStyle = 'olive'
    contexto.fill()

    //green
    contexto.beginPath()
    contexto.arc(200, 260, 20, 0, Math.PI * 2)
    contexto.fillStyle = 'darkgreen'
    contexto.fill()
}

let acesa = 'red'
function changeLight() {
    contexto.clearRect(0, 0, canvas.clientWidth, canvas.height)

    contexto.fillStyle = 'black'
    contexto.fillRect(160, 100, 80, 200)

    //red
    contexto.beginPath()
    contexto.arc(200, 140, 20, 0, Math.PI * 2)
    if (acesa == 'red') {
        contexto.fillStyle = 'red'
    } else {
        contexto.fillStyle = 'darkred'
    }
    contexto.fill()

    //yellow
    contexto.beginPath()
    contexto.arc(200, 200, 20, 0, Math.PI * 2)
    if (acesa == 'yellow') {
        contexto.fillStyle = 'yellow'
    } else {
        contexto.fillStyle = 'olive'
    }
    contexto.fill()

    //green
    contexto.beginPath()
    contexto.arc(200, 260, 20, 0, Math.PI * 2)
    if (acesa == 'green') {
        contexto.fillStyle = 'lightgreen'
    } else {
        contexto.fillStyle = 'darkgreen'
    }
    contexto.fill()
}

function changeColor() {
    if (acesa == 'red') {
        acesa = 'yellow'
    } else if (acesa == 'yellow') {
        acesa = 'green'
    } else {
        acesa = 'red'
    }
    changeLight()
}
let troca = document .getElementById('troca')
troca.addEventListener('click', changeColor)
//setInterval(changeColor, 2000)
trafficLight()

