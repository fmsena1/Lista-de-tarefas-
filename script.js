const tarefas = document.querySelectorAll("[draggable='true']");

const drop = document.querySelector(".drop");

const input = document.querySelector('.add-tarefa');

const button = document.querySelector('.btn-add');



const addTarefa = document.querySelector('#paragrafo');



function criarLi(textInput){
    const li = document.createElement('li');
    li.classList.add('tarefa');
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
    input.value = "";
    input.focus();
}

function criaButtonClear (li){
    li.innerHTML += '';
    const buttonClear = document.createElement('button');
    buttonClear.innerHTML = ' Apagar';
    //buttonClear.classList.add('apagar')
    buttonClear.setAttribute('class', 'apagar');
    buttonClear.setAttribute('title', 'Apagar esta tarefa');
    li.appendChild(buttonClear);
}

function criarTarefa(textInput){
    const li = criarLi();
    li.innerHTML = textInput;
    addTarefa.appendChild(li)
    limparInput();
    criaButtonClear(li);
    salvarTarefas();
}

function salvarTarefas(){
    const liTarefas = addTarefa.querySelectorAll('li');
    const listaDeTarefas = [];

    for (let tarefa of liTarefas){
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
        listaDeTarefas.push(tarefaTexto);
    }
    

    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefasJSON);

}

function addTarefaSalva(){
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas);
    console.log(listaDeTarefas);

    for (let tarefa of listaDeTarefas){
        criarTarefa(tarefa);
    }
}

addTarefaSalva();
/*function comecarArrastar(){
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
drop.addEventListener("dragleave", saiuSoltar);*/
button.addEventListener('click', function(e){
    if (!input.value) return;
    criarTarefa(input.value);
});
paragrafo.classList.add('tarefa');

document.addEventListener('click', function(e){
    const el = e.target;
    if(el.classList.contains('apagar')){
       el.parentElement.remove();
       salvarTarefas();
    }
} )