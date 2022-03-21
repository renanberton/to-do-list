/* Seletores */
const add = document.getElementById('add');
const section = document.querySelector('.container');
const textoInput = document.getElementById('conteudoTarefa');
const novasTarefas = document.querySelector('.novasTarefas');

/* Evento de click Para add as tarefas */
add.addEventListener('click', () => {
    var div = document.createElement('div');
    var texto = document.createElement('p');
    var icone = document.createElement('img');
    icone.src = "img/remove-icon.png";
    icone.style = "height: 30px; cursor: pointer;";
    novasTarefas.appendChild(div);
    div.appendChild(texto);
    div.appendChild(icone);
    div.style = "display: flex; flex-direction: row;"
    div.classList.add('tarefas');
    texto.innerHTML = textoInput.value;  
    textoInput.value = "";  

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
