const tarefas = document.querySelectorAll("[draggable='true']");

const drop = document.querySelector(".drop");

const input = document.querySelector('.add-tarefa');

const button = document.querySelector('.btn-add');



const addTarefa = document.querySelector('#paragrafo');



function criarP(textInput){
    const paragrafo = document.createElement('p');
    paragrafo.classList.add('tarefa');
    return paragrafo;
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

function criaBotaoApagar (){

    const buttonClear = document.createElement('button');
    buttonClear.innerHTML = 'Apagar';
}

function criarTarefa(textInput){
    const p = criarP();
    p.innerHTML = textInput;
    addTarefa.appendChild(p);
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
paragrafo.classList.add('tarefa');