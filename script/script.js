const add = document.getElementById('add');
const section = document.querySelector('.container');
const textoInput = document.getElementById('conteudoTarefa');

add.addEventListener('click', () => {
    var div = document.createElement('div');
    var texto = document.createElement('p');
    var icone = document.createElement('img');
    icone.src = "../img/remove-icon.png";
    icone.style = "height: 30px; cursor: pointer;";
    section.appendChild(div);
    div.appendChild(texto);
    div.appendChild(icone);
    div.style = "display: flex; flex-direction: row; gap: 20px;"
    div.classList.add('tarefas');
    texto.innerHTML = textoInput.value;

    icone.addEventListener('click', () => {
        div.remove();
    })
})
