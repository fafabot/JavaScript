let um = document.getElementById("img1")
let dois = document.getElementById("img2")
let tres = document.getElementById("img3")

um.addEventListener("mouseover", function(){
    um.src = "./img/nada.png"
})

um.addEventListener("mouseout", function(){
    um.src = "./img/1.jpg"
})

dois.addEventListener("mouseover", function(){
    dois.src = "./img/flor.jpg"
})

dois.addEventListener("mouseout", function(){
    dois.src = "./img/2.jpg"
})

tres.addEventListener("mouseover", function(){
    tres.src = "./img/talvez.jpg"
})

tres.addEventListener("mouseout", function(){
    tres.src = "./img/3.png"
})