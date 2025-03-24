//Constantes que capturam os elementos HTML
const tarefaInput = document.getElementById("tarefaInput");
const adicionarButton = document.getElementById("adicionarButton");

//Aplica um ouvidor de eventos que ao ser clicado vai executar a função adicionarItemNaLista
adicionarButton.addEventListener("click", adicionarItemNaLista);

//Função que gera e formata a data e hora atual
function gerarData() {
    const dataAtual = new Date();
    const diaDaSemana = dataAtual.toLocaleDateString("pt-BR", { weekday: "long" });
    const dataCompleta = dataAtual.toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit", year: "numeric" });
    const hora = dataAtual.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });
    return `${diaDaSemana}, ${dataCompleta} às ${hora}`;
}

//Função que adiciona uma nova atividade na lista de tarefas
function adicionarItemNaLista(){
    const tarefa = tarefaInput.value;
    if (tarefa) {
        const novaTarefa = document.createElement("li");
        novaTarefa.textContent = `${tarefa} - ${gerarData()}`;
        const listaTarefas = document.getElementById("listaTarefas");
        listaTarefas.appendChild(novaTarefa);
        tarefaInput.value = "";
    }
}
