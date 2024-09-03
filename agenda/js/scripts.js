// mostrar mensagem de boas vindas
// uso para ver se esta funcionando
console.log("Ola Mundo!");

/** o codigo e executado quando DOM estiver totalmente carregada */
// adicionar um escutador
document.addEventListener('DOMContentLoaded',
    () => {
        /** selecionar o formulario pelo id */
        const tarefaForm = document.getElementById('tarefa-form');

        /** selecionar o input de entrada pelo id */
        const tarefaInput = document.getElementById('tarefa-input');

        /** selecionar nossa lista de tarefas pela id */
        const tarefasLista = document.getElementById('tarefa-input');

        /** vou criar um listener para monitorar o form quando eu clicar no botao submit*/
        tarefaForm.addEventListener('submit', (e) => {
            // mudar o comportamento do formulario
            // no caso previnir comportamento padrão
            e.preventDefault();

            // pegar informação do input
            // let e const eu crio variaveis
            let tarefa = tarefaInput.value;

            // função que adiciona a tarefa na ul
            // addTarefa (tarefaInput.value);
            addTarefa(tarefa);

            // limpar o input
            tarefaInput.value = "";

            // termina o listener do tarefaForm 
        });

        // funções e metodos, são comportamentos de uma classe
        // podem receber ou não parametros
        // podem retornar ou não tipos de dados
        // quando não retorna e conhecido por vazio (void)
        function addTarefa(tarefa) {
            console.log(tarefa);
            // criar um elemento li
            const li = document.createElement('li');
            // cria um span
            const span = document.createElement('span');
            // definir o texto do span
            span.textContent = tarefa;

        }

        // so fecha no final do arquivo
    }
);

