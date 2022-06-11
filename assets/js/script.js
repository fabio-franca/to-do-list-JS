const form = document.getElementById('form-todolist');
const listaTarefa = document.getElementById('list');

form.onsubmit = function (event) {
	event.preventDefault();
	const textoTarefa = document.getElementById('texto-tarefa');
	adicionarTarefa(textoTarefa.value);
	form.reset();
};

function adicionarTarefa(descricao) {
	const tarefaContainer = document.createElement('div');
	const novaTarefa = document.createElement('input');
	const tarefa = document.createElement('p');
	const taskDescriptionNode = document.createTextNode(descricao);

	novaTarefa.setAttribute('type', 'checkbox');
	novaTarefa.setAttribute('name', descricao);
	novaTarefa.setAttribute('id', descricao);

	tarefa.setAttribute('for', descricao);
	tarefa.appendChild(taskDescriptionNode);

    if(descricao != '') {
        tarefaContainer.classList.add('task-item');
        tarefaContainer.appendChild(novaTarefa);
        tarefaContainer.appendChild(tarefa);
    
        listaTarefa.appendChild(tarefaContainer);
    } else {
        alert('Informe uma descrição');
    }

}

// var textoTarefa = document.getElementById('texto-tarefa');
// var texto = document.createTextNode(textoTarefa.value);
// console.log(textoTarefa.value)

// var listaArray = [];


// function lancarTarefa() {
//     var novoElemento = document.createElement('p');
//     var itens = document.getElementsByTagName('p');
//     novoElemento.appendChild(texto);
//     listaArray.push(novoElemento);
    
//     listaTarefa.classList.add(itens.namedItem) ;
//     //listaTarefa.insertBefore(novoElemento, itens[0]);
//     console.log("Criou: " + texto)

//     textoTarefa.value = '';
// }