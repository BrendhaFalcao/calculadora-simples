var calculadoraLigada = false

function ligaCalculadora() {
  var telaLigada = document.querySelector('.tela-ligada')
  var telaDesligada = document.querySelector('.tela-desligada')

  if (calculadoraLigada == false) {
    telaDesligada.style.display = 'none'
    telaLigada.style.display = 'block'
    calculadoraLigada = true
    limpa()
  } else if (calculadoraLigada == true) {
    telaDesligada.style.display = 'block'
    telaLigada.style.display = 'none'
    calculadoraLigada = false
  }
}

var checkbox = document.querySelector('.checkbox')
var calculadoraCompleta = document.querySelector('.calculadora-completa')
var logo = document.querySelector('.logo h2')
var telaLigada = document.querySelector('.tela-ligada')
var botaoTema = document.querySelector('.btn-tema')
var switchBall = document.querySelector('.switch-ball')
var botoes = document.querySelectorAll('button')

// o classList.toggle troca o estado que um elemento para o que está especificado entre parênteses (nesse caso aí é um estilo, uma classe no css)
function trocaModo() {
  calculadoraCompleta.classList.toggle('dark')
  telaLigada.classList.toggle('dark')
  for (i = 0; i < botoes.length; i++) {
    botoes[i].classList.toggle('dark')
  }
  logo.classList.toggle('dark')
  botaoTema.classList.toggle('dark')
  switchBall.classList.toggle('dark')
}

//checkbox.addEventListener('change', trocaModo)
// outra forma de fazer
checkbox.onchange = trocaModo

function limpa() {
  var resultado = document.querySelector('.resultado')
  resultado.innerHTML = ''
}

//todas as funções dos botões com números e operadores estão no html
function digita(num) {
  var resultado = document.querySelector('.resultado')
  resultado.innerHTML = resultado.innerHTML + num;
}

function calculaValores() {
  var resultado = document.querySelector('.resultado').innerText
  document.querySelector('.resultado').innerText = eval(resultado)
}
