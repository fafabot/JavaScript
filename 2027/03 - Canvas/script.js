let canvas = document.getElementById('canvas')
let contexto = canvas.getContext('2d')
let slider = document.getElementById('progresso')
let task1Button = document.getElementById('task1')
let task2Button = document.getElementById('task2')
let task3Button = document.getElementById('task3')
let task4Button = document.getElementById('task4')
let task5Button = document.getElementById('task5')

// 1. Desenhando a moldura
function drawFrame() {
contexto.strokeStyle = 'blue'
contexto.strokeRect(0, 0, canvas.width, canvas.height)
}

// 2. Barra preenchida com valor fixo
function drawFixedBar() {
contexto.beginPath()
contexto.fillStyle = 'red'
contexto.fillRect(0, 0, canvas.width * 0.4, 80) //x, y, width, height
contexto.fill()
}

//3. Conectando ao slider
function drawDynamicBar(value) {
contexto.clearRect(0, 0, canvas.width, canvas.height)
contexto.beginPath()
contexto.fillStyle = 'green'
contexto.fillRect(0, 0, canvas.width * (value / 100), 80)
contexto.fill()
}
slider.addEventListener('input', function() {
    drawDynamicBar(this.value)
})

//4. Desenhando

//Japão
function drawJapan() {
    contexto.beginPath()
    contexto.fillStyle = 'white'
    contexto.fillRect(0, 0, 60, 60)
    contexto.fillStyle = 'red'
    contexto.arc(30, 30, 15 , 0, Math.PI * 2)
    contexto.fill()
    contexto.strokeStyle = 'black'
    contexto.strokeRect(0, 0, 60, 60)
}
//Itália
function drawItaly() {
    contexto.beginPath()
    contexto.fillStyle = 'green'
    contexto.fillRect(60, 0, 20, 60)
    contexto.fillStyle = 'white'
    contexto.fillRect(80, 0, 20, 60)
    contexto.fillStyle = 'red'
    contexto.fillRect(100, 0, 20, 60)
    contexto.strokeStyle = 'black'
    contexto.strokeRect(60, 0, 60, 60)
}

//Polônia
function drawPoland() {
    contexto.beginPath()
    contexto.fillStyle = 'white'
    contexto.fillRect(120, 0, 60, 30)
    contexto.fillStyle = 'red'
    contexto.fillRect(120, 30, 60, 30)
    contexto.strokeStyle = 'black'
    contexto.strokeRect(120, 0, 60, 60)
}

//Uruguai
function drawUruguay() {
    contexto.beginPath()
    contexto.fillStyle = 'white'
    contexto.fillRect(180, 0, 60, 60)
    contexto.fillStyle = 'blue'
    for (let i = 0; i < 9; i++) {
        if (i % 2 === 1) {
            contexto.fillRect(180, i * 6.66, 60, 6.66)
        }
    }

    contexto.beginPath()
    contexto.fillStyle = 'white'
    contexto.fillRect(180, 0, 33.3, 33.3)
    contexto.fill()

    contexto.beginPath()
    contexto.arc(180 + 16.65, 16.65, 10, 0, Math.PI * 2)
    contexto.fillStyle = 'gold'
    contexto.fill()

    contexto.strokeStyle = 'black'
    contexto.strokeRect(180, 0, 60, 60)
    contexto.fill()
}

//Alemanha
function drawGermany() {
    contexto.beginPath()
    contexto.fillStyle = 'black'
    contexto.fillRect(240, 0, 60, 20)
    contexto.fillStyle = 'red'
    contexto.fillRect(240, 20, 60, 20)
    contexto.fillStyle = 'gold'
    contexto.fillRect(240, 40, 60, 20)
    contexto.strokeStyle = 'black'
    contexto.strokeRect(240, 0, 60, 60)
}

//França
function drawFrance() {
    contexto.beginPath()
    contexto.fillStyle = 'blue'
    contexto.fillRect(300, 0, 20, 60)
    contexto.fillStyle = 'white'
    contexto.fillRect(320, 0, 20, 60)
    contexto.fillStyle = 'red'
    contexto.fillRect(340, 0, 20, 60)
    contexto.strokeStyle = 'black'
    contexto.strokeRect(300, 0, 60, 60)
}


// 5. Desenhando - Pt2
function drawHouse() {    
// Corpo da casa azul-claro
contexto.fillStyle = "lightblue";
contexto.fillRect(
    100,
    180,
    200,
    150
)

// Telhado triangular vinho
contexto.fillStyle = "#800020";
contexto.beginPath();
contexto.moveTo(
    80,
    180
)
contexto.lineTo(
    200,
    80
)
contexto.lineTo(
    320,
    180
)
contexto.closePath();
contexto.fill();

// Janela redonda preta
contexto.fillStyle = "black";
contexto.beginPath();
contexto.arc(
    150,
    230,
    25,
    0,
    Math.PI * 2
)
contexto.fill()

// Porta marrom
contexto.fillStyle = "brown";
contexto.fillRect(
    220,
    250,
    50,
    80
)
}




function task1() {
    slider.style.display = 'none'
    contexto.clearRect(0, 0, canvas.width, canvas.height)
    drawFrame()
}

function task2() {
    slider.style.display = 'none'
    contexto.clearRect(0, 0, canvas.width, canvas.height)
    drawFixedBar()
}

function task3() {
    slider.style.display = 'block'
    contexto.clearRect(0, 0, canvas.width, canvas.height)
    drawDynamicBar(slider.value)
}

function task4() {
    slider.style.display = 'none'
    contexto.clearRect(0, 0, canvas.width, canvas.height)
    drawJapan()
    drawItaly()
    drawPoland()
    drawUruguay()
    drawGermany()
    drawFrance()
}

function task5() {
    slider.style.display = 'none'
    contexto.clearRect(0, 0, canvas.width, canvas.height)
    drawHouse()
}

task1Button.addEventListener('click', task1)
task2Button.addEventListener('click', task2)
task3Button.addEventListener('click', task3)
task4Button.addEventListener('click', task4)
task5Button.addEventListener('click', task5)