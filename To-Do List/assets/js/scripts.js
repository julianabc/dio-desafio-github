const form = document.getElementById('task-form');
const taskList = document.getElementById('tasks');


form.onsubmit = function (e) {
	e.preventDefault();

	// manda o valor para as tarefas
	const inputField = document.getElementById('to-do_ID');
	addTask(inputField.value);

	// reseta o formulario
	form.reset();
};



function addTask(description) {

	// cria elemnentos do html
	const taskContainer = document.createElement('div');
	const newTask = document.createElement('input');
	const taskLabel = document.createElement('label');

	// cria a tarefa
	const taskDescriptionNode = document.createTextNode(description);

	// seta atributos da tarefa, incluindo nome e id com o mesmo nome da tarefa
	newTask.setAttribute('type', 'checkbox');
	newTask.setAttribute('name', description);
	newTask.setAttribute('id', description);

	// seta atrbutos da label 
	taskLabel.setAttribute('for', description);

	// cria o nó
	taskLabel.appendChild(taskDescriptionNode);

	taskContainer.classList.add('task-item');
	taskContainer.appendChild(newTask);
	taskContainer.appendChild(taskLabel);

	taskList.appendChild(taskContainer);
}
