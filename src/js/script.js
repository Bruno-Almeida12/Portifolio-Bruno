//Fazer botão "Mostrar Mais" exibir os conteúdos
const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');

botaoMostrarProjetos.addEventListener('click', () => {
    exibirMais();
    esconderBotao();
})

function esconderBotao() {
    botaoMostrarProjetos.classList.add('remover');
}

function exibirMais() {
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.add('ativo');
    });
}


