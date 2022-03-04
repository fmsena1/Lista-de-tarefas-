const tarefas = document.querySelectorAll("[draggable='true']");

const drop = document.querySelector(".drop");

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