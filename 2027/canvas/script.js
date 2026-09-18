let canvas = document.getElementById('canvas')
let contexto = canvas.getContext('2d')

contexto.fillStyle = 'red'
contexto.fillRect(50, 50, 80, 80) //x, y, width, height
contexto.strokeStyle = 'green'
contexto.strokeRect(100, 100, 80, 80) //x, y, width, height
contexto.clearRect(70, 50, 50, 50) //x, y, width, height

// Draw a face
// Head
contexto.beginPath()
contexto.arc(200, 200, 50, 0, Math.PI * 2) // x, y, radius, startAngle, endAngle
contexto.fillStyle = 'papayawhip'
contexto.fill()

// Eyes
contexto.beginPath()
contexto.arc(185, 190, 5, 0, Math.PI * 2) // Left eye
contexto.arc(215, 190, 5, 0, Math.PI * 2) // Right eye
contexto.fillStyle = 'black'
contexto.fill()

// Mouth
contexto.beginPath()
contexto.fillRect(175, 210, 50, 2) // x, y, width, height

// tongue
contexto.beginPath()
contexto.arc(200, 212, 15, 0, Math.PI)
contexto.fillStyle = 'red'
contexto.fill()

contexto.beginPath()
contexto.fillStyle = 'black'
contexto.fillRect(200, 212, 1, 10) // x, y, width, height