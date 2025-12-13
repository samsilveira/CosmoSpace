// A função alternarTema() é chamada pelo botão com onClick="alternarTema()"
function alternarTema() {
    // Seleciona os elementos para a troca de tema
    const corpoPagina = document.body;
    const conteudoPrincipal = document.querySelector('main');
    
    // Alterna a classe 'tema-claro' no body e na main
    corpoPagina.classList.toggle('tema-claro');
    if (conteudoPrincipal) {
        conteudoPrincipal.classList.toggle('tema-claro');
    }

    // Persistência: salva a preferência do usuário no localStorage
    const estaClaro = corpoPagina.classList.contains('tema-claro');
    localStorage.setItem('preferenciaTema', estaClaro ? 'claro' : 'escuro');
    
    console.log("Tema alternado para: " + (estaClaro ? "CLARO" : "ESCURO"));
}

// Executa o código após o carregamento total do DOM
document.addEventListener('DOMContentLoaded', function() {
    
    // --- 1. CARREGAR TEMA PERSISTENTE AO INICIAR ---
    function carregarTema() {
        const preferenciaSalva = localStorage.getItem('preferenciaTema');
        const conteudoPrincipal = document.querySelector('main');

        if (preferenciaSalva === 'claro') {
            document.body.classList.add('tema-claro');
            if (conteudoPrincipal) {
                 conteudoPrincipal.classList.add('tema-claro');
            }
        }
    }
    carregarTema(); // Executa o carregamento do tema
    
    // --- 2. FUNCIONALIDADE DO BOTÃO ENVIAR FORMULÁRIO ---
    
    // O ID do botão é "btnenviar"
    const botaoEnviar = document.getElementById('btnenviar');

    if (botaoEnviar) {
        // Adiciona um Event Listener para o clique
        botaoEnviar.addEventListener('click', function(evento) {
            
            // Exibe o alerta solicitado (em português)
            alert("Formulário enviado com sucesso!");
        });
    }
    
});