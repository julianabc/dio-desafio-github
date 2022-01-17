const form = document.getElementById('task-form');
const listaTarefa = document.getElementById('to-doTasks');


form.onsubmit = function (e) {
	e.preventDefault();

	// manda o valor para as tarefas
	const inputCampo = document.getElementById('to-do_ID');
	adicionarTask(inputCampo.value); // pega o valor do campo

	// reseta o formulario
	form.reset();
};



function adicionarTask(desc) {

	// cria elemnentos do html
	const tarefaDiv = document.createElement('div');
	const novaTarefa = document.createElement('input');
	const tarefaLabel = document.createElement('label');

	// cria a tarefa
	const tarefaDescNode = document.createTextNode(desc);

	// seta atributos da tarefa, incluindo nome e id com o mesmo nome da tarefa
	novaTarefa.setAttribute('type', 'checkbox');
	novaTarefa.setAttribute('name', desc);
	novaTarefa.setAttribute('id', desc);

	// seta atrbutos da label 
	tarefaLabel.setAttribute('for', desc);

	// cria o nó
	tarefaLabel.appendChild(tarefaDescNode);

	tarefaDiv.classList.add('task-item');
	tarefaDiv.appendChild(novaTarefa);
	tarefaDiv.appendChild(tarefaLabel);

	listaTarefa.appendChild(tarefaDiv);
}
