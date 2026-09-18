let canvas = document.getElementById('canvas')
let contexto = canvas.getContext('2d')

//sky
contexto.beginPath()
contexto.fillStyle = 'lightblue'
contexto.fillRect(0,0,canvas.clientWidth, canvas.height)

//grass
contexto.beginPath()
contexto.fillStyle = 'green'
contexto.fillRect(0,300,canvas.clientWidth, 100)

//sun
contexto.beginPath()
contexto.arc(70, 60, 50, 0, Math.PI * 2) // x, y, radius, startAngle, endAngle
contexto.fillStyle = 'yellow'
contexto.fill()

//montain
contexto.beginPath()
contexto.moveTo(350, 300)
contexto.lineTo(250, 150)
contexto.lineTo(150, 300)
contexto.closePath()
contexto.fillStyle = 'gray'
contexto.fill()

//cloud
function cloud(x, y) {
    contexto.beginPath()
    contexto.arc(x, y, 20, 0, Math.PI * 2)
    contexto.arc(x + 15, y - 10, 25, 0, Math.PI * 2)
    contexto.arc(x + 30, y, 20, 0, Math.PI * 2)
    contexto.fillStyle = 'white'
    contexto.fill()
}

cloud(170, 80)
cloud(270, 50)
cloud(350, 100)