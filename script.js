// torre de hanoi 
// o jogo tem que ter 3 varetas - cada uma tem um handler de clique 
// o jogo precisa ter 4 discos de tamanhos diferentes
// o  usuário precisa orgaganizar os discos (em ordem crescente)
// ele só pode mover um disco por vez (o disco de cima) - appendChild
// ele tem que clicar no disco que vai mover e depois na vareta pra onde ele vai 
// se o disco movido for menor(clientWidth) que o disco no eixo atual > ok (lastElementChild)
// se o disco movido for maior(clientWidth) (não move) 
// quando a torre tiver 4 discos (childElementCount) em ordem crescente - fim de jogo  
// criar variável dos discos
// variavel varetas
// criar as divs dos discos (criar tamanho)
// criar as divs das varetas (dar classes para elas)

// fazer uma função de clique que selecione o disco e a tribua ao primeiro clique

// fazer uma função que atribua a variavel segundo clique a posição do disco selecionado 

// fazer a funçao de comparação 
// se o discoEscolhido for menor do que lastchild (ou nada) em varetas 
//eixo atual fica sem o disco, e o disco é atribuido à novoLugar
// se não  
// discoEscolhido permanece no eixo atual

//if varetaEnd estiver com 4 discos 
// exibe vitória

let disco_1 = inserir("disco1")
let disco_2 = inserir("disco2")
let disco_3 = inserir("disco3")
let disco_4 = inserir("disco4")
let torreOrigem
let torreDestino
let div_start = document.getElementById("start")
let div_offset = document.getElementById("offset")
let div_end = document.getElementById("end")
let ultimoElementoStart
let tamanhoElementoStart
let ultimoElementoOffset
let tamanhoElementoOffset
let ultimoElementoEnd
let tamanhoElementoEnd
let posicao = 0
let clique = 0
let counter = document.getElementById("counter");




div_start.addEventListener("click", function() {

    posicao++
    if (posicao === 1) {
        torreOrigem = div_start.id
        torreDestino = undefined
    }
    if (posicao === 2) {
        torreDestino = div_start.id
        posicao = 0
        clique++
    }

    if (div_start.querySelector("div") !== null) {
        ultimoElementoStart = div_start.getElementsByClassName(div_start.querySelector("div").className)[0]
        tamanhoElementoStart = ultimoElementoStart.clientWidth
    } else {
        tamanhoElementoStart = 0
    }

    if (torreOrigem === "offset") {
        if (validar(tamanhoElementoOffset, tamanhoElementoStart) === true) {
            document.getElementById("start").insertAdjacentElement('afterbegin', ultimoElementoOffset)
        }
    }

    if (torreOrigem === "end") {
        if (validar(tamanhoElementoEnd, tamanhoElementoStart) === true) {
            document.getElementById("start").insertAdjacentElement('afterbegin', ultimoElementoEnd)
        }
    }
    contador()

})

div_offset.addEventListener("click", function() {

    posicao++
    if (posicao === 1) {
        torreOrigem = div_offset.id
        torreDestino = undefined
    }
    if (posicao === 2) {
        torreDestino = div_offset.id
        posicao = 0
        clique++
    }
    if (div_offset.querySelector("div") !== null) {
        ultimoElementoOffset = div_offset.getElementsByClassName(div_offset.querySelector("div").className)[0]
        tamanhoElementoOffset = ultimoElementoOffset.clientWidth
    } else {
        tamanhoElementoOffset = 0
    }

    if (torreOrigem === "start") {
        if (validar(tamanhoElementoStart, tamanhoElementoOffset) === true) {
            document.getElementById("offset").insertAdjacentElement('afterbegin', ultimoElementoStart)
        }
    }
    if (torreOrigem === "end") {
        if (validar(tamanhoElementoEnd, tamanhoElementoOffset) === true) {
            document.getElementById("offset").insertAdjacentElement('afterbegin', ultimoElementoEnd)
        }
    }
    contador()
})

div_end.addEventListener("click", function() {

    posicao++
    if (posicao === 1) {
        torreOrigem = div_end.id
        torreDestino = undefined
    }
    if (posicao === 2) {
        torreDestino = div_end.id
        posicao = 0
        clique++
    }

    if (div_end.querySelector("div") !== null) {
        ultimoElementoEnd = div_end.getElementsByClassName(div_end.querySelector("div").className)[0]
        tamanhoElementoEnd = ultimoElementoEnd.clientWidth
    } else {
        tamanhoElementoEnd = 0
    }

    if (torreOrigem === "start") {
        if (validar(tamanhoElementoStart, tamanhoElementoEnd) === true) {
            document.getElementById("end").insertAdjacentElement('afterbegin', ultimoElementoStart)
        }
    }
    if (torreOrigem === "offset") {
        if (validar(tamanhoElementoOffset, tamanhoElementoEnd) === true) {
            document.getElementById("end").insertAdjacentElement('afterbegin', ultimoElementoOffset)
        }
    }

    vitoria()
    contador()

})

function vitoria() {
    if (div_end.childElementCount === 4) {
        let h2 = document.createElement("h2")
        h2.innerText = "Parabéns, Você Venceu!"
        document.getElementById("resultado").appendChild(h2)
    }
}


function validar(itemOrigem, itemDestino = 0) {
    if (torreDestino !== undefined) {

        if (torreOrigem !== torreDestino && itemDestino === 0) {
            console.log("true1")
            return true
        } else if (torreOrigem !== torreDestino && itemOrigem < itemDestino) {
            console.log("true2")
            return true
        }
    }
}

function inserir(nomedadiv) {
    let div = document.createElement('div')
    div.className = nomedadiv
    document.getElementById("start").appendChild(div)
}

function contador() {
    let numeroDeCliques = clique
    document.getElementById("counter").innerText = numeroDeCliques
}