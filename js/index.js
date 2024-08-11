const botoescarrosel = document.querySelectorAll(".botao");
const imagens = document.querySelectorAll(".imagem");
const informacoes = document.querySelectorAll(".informacoes");

botoescarrosel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        // Passo 3 - desmarcar o botão selecionado anterior
        const botaoSelecionado = document.querySelector(".botao.selecionado");
        if (botaoSelecionado) {
            botaoSelecionado.classList.remove("selecionado");
        }

        // Passo 4 - marcar o botão clicado como se estivesse selecionado
        botao.classList.add("selecionado");

        // Passo 5 - esconder a imagem anteriormente selecionada
        const imagemAtiva = document.querySelector(".imagem.ativa");
        if (imagemAtiva) {
            imagemAtiva.classList.remove("ativa");
        }

        // Passo 6 - fazer aparecer a imagem correspondente ao botão clicado
        imagens[indice].classList.add("ativa");

        // Passo 7 - esconder a informação do dragão anteriormente selecionado
        const informacoesAtiva = document.querySelector(".informacoes.ativa");
        if (informacoesAtiva) {
            informacoesAtiva.classList.remove("ativa");
        }

        // Passo 8 - mostrar a informação do dragão referente ao botão clicado
        informacoes[indice].classList.add("ativa");
    });
});
