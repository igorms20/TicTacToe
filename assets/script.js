

const playerX = 'x'
const playerO = 'o'
var xTurn = true

const espacos = document.querySelectorAll('li')

for (i = 0; i < espacos.length; i++) {
    var espaco = espacos[i]
    espaco.addEventListener("click", (e) => {
        var celulaId = e.target.id
        var celula = document.getElementById(`${celulaId}`)
        if (xTurn) {
           celula.innerHTML = '<img src="./assets/img/X.svg" alt="">'
           xTurn = false 
        } else {
           celula.innerHTML = '<img src="./assets/img/O.svg" alt="">'
           xTurn = true
        }        
    })
}

const XSymbol = '<img src="./assets/img/X.svg" alt="">'
const OSymbol = '<img src="./assets/img/O.svg" alt="">'

let cells = []

for (let i = 0; i < espacos.length; i++) {
    let espaco = espacos[i]
    cells.push(espaco)
    
}

console.log(cells)

const esp1 = document.getElementById('1')
const esp2 = document.getElementById('2')
const esp3 = document.getElementById('3')
const esp4 = document.getElementById('4')
const esp5 = document.getElementById('5')
const esp6 = document.getElementById('6')
const esp7 = document.getElementById('7')
const esp8 = document.getElementById('8')
const esp9 = document.getElementById('9')

if ((esp1.innerHTML == XSymbol) && (esp2.innerHTML == XSymbol) && (esp3.innerHTML == XSymbol)) {
    console.log("Jogador X Ganhou!")
}