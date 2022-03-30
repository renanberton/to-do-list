/* Seletores */
const add = document.getElementById('add');
const section = document.querySelector('.container');
const textoInput = document.getElementById('conteudoTarefa');
const novasTarefas = document.querySelector('.novasTarefas');

/* Evento de click no icone (+) Para add as tarefas */
add.addEventListener('click', () => {
    /* Cria uma div */
    var div = document.createElement('div');
    /* Cria um paragrafo 'p' */
    var texto = document.createElement('p');
    /* Cria uma imagem */
    var icone = document.createElement('img');
    icone.src = "img/remove-icon.png";
    icone.style = "height: 30px; cursor: pointer;";

    /* No HTML Existe uma div.novasTarefas vazia, o appendChild irá inserir essa div dentro da mesma */
    novasTarefas.appendChild(div);
    /* Depois a div que foi add a tag novasTarefas irá inserir dentro dela o texto e o icone */
    div.appendChild(texto);
    div.appendChild(icone);
    div.style = "display: flex; flex-direction: row;"
    /* Add a classe 'tarefas' a div */
    div.classList.add('tarefas');
    /* O valor do texto da nova tarefa, será o valor inserido no input de add tarefas */
    texto.innerHTML = textoInput.value;  
    /* Toda vez que clicar no icone de add ele irá fazer tudo o que foi explicado anteriormente, e irá esvaziar o input automáticamente */
    textoInput.value = "";  

    /* Evento para o botão de remover, que ao clicado, irá remover a tarefa  */
    icone.addEventListener('click', () => {
        div.remove();
    })
})

const screenShot = document.getElementById('screenShot');
/* Evento de click para tirar um print Screen das tarefas, e fazer o download da img */
screenShot.addEventListener('click', () => {
    html2canvas(document.querySelector("#capture")).then(canvas => {
        let a = document.createElement("a");
        a.download = "tarefa.jpg";
        a.href = canvas.toDataURL("image/jpg");
        a.click();
    });
})
