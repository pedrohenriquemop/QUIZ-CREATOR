let novoQuiz = document.querySelector('#novo-quiz')
let botaoAdd = document.querySelector('#botao-add')
let criarQuiz = document.querySelector('#criar-quiz')
let botaoFechar = document.querySelector('.botao-fechar')
let vetorQuizes = []
let listaQuizes = document.querySelector('#quizes ul')
let itensLista = document.querySelectorAll('#quizes ul li')
let nomeQuiz = document.querySelector('#nome-quiz')
let perguntaQuiz = document.querySelector('#pergunta-quiz')
let alternativasQuiz = document.querySelectorAll('.alternativa')
let alternativaCorreta = document.querySelector('#alternativa-correta')
let quizPlace = document.querySelector('#quiz-place')
let cont = 0

quizPlace.classList.add('desaparecido')
novoQuiz.classList.add('desaparecido')

function desaparecido(e){
  novoQuiz.classList.toggle('desaparecido')
  novoQuiz.classList.toggle('aparecido')
  nomeQuiz.value = 'Novo Quiz'
  perguntaQuiz.value = ''
  alternativasQuiz[0].value = ''
  alternativasQuiz[1].value = ''
  alternativasQuiz[2].value = ''
  alternativasQuiz[3].value = ''
  alternativasQuiz[4].value = ''
  alternativaCorreta.value = ''
}

function create(e){
  let createdQuiz = new Object()
  createdQuiz.nome = nomeQuiz.value
  createdQuiz.pergunta = perguntaQuiz.value
  createdQuiz.alternativa1 = alternativasQuiz[0].value
  createdQuiz.alternativa2 = alternativasQuiz[1].value
  createdQuiz.alternativa3 = alternativasQuiz[2].value
  createdQuiz.alternativa4 = alternativasQuiz[3].value
  createdQuiz.alternativa5 = alternativasQuiz[4].value
  createdQuiz.correta = alternativaCorreta.value
  vetorQuizes.push(createdQuiz)
  console.log(vetorQuizes)
  desaparecido()
  criaLi(createdQuiz)
}

function criaLi(e){
  let novaLi = document.createElement('li')
  novaLi.innerHTML = e.nome
  novaLi.dataset.indice = cont
  novaLi.classList.add('item-lista')
  listaQuizes.appendChild(novaLi)
  itensLista = listaQuizes.childNodes
  itensLista[cont].addEventListener('click', abreQuiz)
  cont++
}

function abreQuiz(e){
  let target = e.currentTarget
  let indice = target.dataset.indice
  quizPlace.innerHTML = "<img src='X.png' class='botao botao-fechar'><h1>"+vetorQuizes[indice].nome+"</h1>"+
  "<p>"+vetorQuizes[indice].pergunta+"</p>"+"<label><input type='radio' name='alternat' data-alternativa='1'>"+vetorQuizes[indice].alternativa1+"</label>"+
  "<label><input type='radio' name='alternat' data-alternativa='2'>"+vetorQuizes[indice].alternativa2+"</label>"+
  "<label><input type='radio' name='alternat' data-alternativa='3'>"+vetorQuizes[indice].alternativa3+"</label>"+
  "<label><input type='radio' name='alternat' data-alternativa='4'>"+vetorQuizes[indice].alternativa4+"</label>"+
  "<label><input type='radio' name='alternat' data-alternativa='5'>"+vetorQuizes[indice].alternativa5+"</label>"+
  "<button>Confirmar</button>";
  let img = document.querySelector('#quiz-place img')
  let botaoConfirma = document.querySelector('#quiz-place button')
  img.addEventListener('click', desaparecePai)
  botaoConfirma.addEventListener('click', confirma)
  quizPlace.classList.toggle('aparecido')
  quizPlace.classList.toggle('desaparecido')
}

function confirma(e){
 alert('ativo')  
}

function desaparecePai(e){
  e.currentTarget.parentNode.classList.toggle('desaparecido')
  e.currentTarget.parentNode.classList.toggle('aparecido')
}

criarQuiz.addEventListener('click', create)
botaoFechar.addEventListener('click', desaparecido)
botaoAdd.addEventListener('click', desaparecido)
