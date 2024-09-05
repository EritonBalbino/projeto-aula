// Mostar mensagem de boas vindas
// Uso para ver se esta funcionando
console.log("Ola Mundo!");

/** O codigo e executado quando DOM estiver
totalmente carregada.*/
// Adiconar um escutador
document.addEventListener('DOMContentLoaded',
    () => {
        /**Selecionar o formulario pelo id */
        const tarefaForm = document.getElementById('tarefa-form');

        /**Selecionar o input de entrada pelo id*/
        const tarefaInput = document.getElementById('tarefa-input');

        /**Selecionar nossa lista de tarefas pela id */
        const tarefasLista = document.getElementById('tarefas-lista');

        /**Eu vou criar um listener para monitorar o form quando
         * eu clicar no botão submit
         */
        tarefaForm.addEventListener('submit', (e) => {
            //Mudar o comportamento do formulario
            //No previnir comportamento padrão
            e.preventDefault();

            //Pegar informação do input
            // let e const eu crio variaveis
            let tarefa = tarefaInput.value;          

            // Função que adciona a tarefa na ul
            // addTarefa(tarefaInput.value);
            addTarefa(tarefa);

            //Limpar o input
            tarefaInput.value = "";


            //termina o listener do tarefaForm
        });

        //Funções e metodos, são comportamentos de uma classe
        //Podem receber ou não parametros
        //Podem retornar ou não tipos de dados
        //Quando não retorna é conhecido por vazio (void)
        function addTarefa(tarefa){
            console.log(tarefa);
            // criar uma li
            const li = document.createElement('li');
            // criar um span
            const span = document.createElement('span');
            // Definir o texto do span
            span.textContent = tarefa;

            //Adcionar Span
            //Adicionar o Li

        }

        //so fecha no final do arquivo
    }
);

