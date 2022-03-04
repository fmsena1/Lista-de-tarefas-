const tarefas = document.querySelectorAll("[draggable='true']");

const drop = document.querySelector(".drop");

const input = document.querySelector('.add-tarefa');

const button = document.querySelector('.btn-add');

const addTarefa = document.querySelector('.tarefa');


function criarLi(){
    const li = document.createElement('li');
    return li;
}

input.addEventListener('keypress', function(e){
    if(e.keyCode === 13){
        if (!input.value) return;
        criarTarefa(input.value);
        limparInput();
    }
});

function limparInput(){
    input.value = '';
    input.focus();
}

function criarTarefa(textInput){
    const li = criarLi();
    li.innerHTML = textInput;
    addTarefa.appendChild(li);

}

function comecarArrastar(){
    console.log('Começou a arrastar');

    this.classList.add('arrastando')

}


function entrouSoltar(){
    this.classList.add("hover");

    const elementoArrastado = document.querySelector(".arrastando");

    this.appendChild(elementoArrastado);
}

function saiuSoltar(){
    this.classList.remove('hover')
}

tarefas.forEach((tarefa)=>{
    tarefa.addEventListener("dragstart" , comecarArrastar);
})

drop.addEventListener("dragover", entrouSoltar);
drop.addEventListener("dragleave", saiuSoltar);
button.addEventListener('click', function(e){
    if (!input.value) return;
    criarTarefa(input.value);
});