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
            console.log(tarefa);

            // função que adiciona a tarefa na ul
            // addTarefa (tarefaInput.value);
            addTarefa(tarefa);

            // limpar o input
            tarefaInput.value = "";

            // termina o listener do tarefaForm 
        });

        // so fecha no final do arquivo
    }
);

