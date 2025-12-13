// A função alternarTema() é chamada pelo botão com onClick="alternarTema()"
function alternarTema() {
    // Seleciona o elemento principal <body> para a troca de tema
    const corpoPagina = document.body;
    
    // Alterna a classe 'tema-claro' no <body>
    // Esta classe é a que seu CSS espera para mudar as cores.
    corpoPagina.classList.toggle('tema-claro');

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

        // Se a preferência salva for 'claro', adiciona a classe tema-claro
        if (preferenciaSalva === 'claro') {
            document.body.classList.add('tema-claro');
        }
    }
    carregarTema(); // Executa o carregamento do tema
    
    // Como esta é a página da Galeria, não há botão 'btnenviar' aqui.
    
    console.log("Funcionalidade do Tema carregada.");
});

// A função alternarTema() é chamada pelo botão com onClick="alternarTema()"
function alternarTema() {
    const corpoPagina = document.body;
    
    corpoPagina.classList.toggle('tema-claro');

    const estaClaro = corpoPagina.classList.contains('tema-claro');
    localStorage.setItem('preferenciaTema', estaClaro ? 'claro' : 'escuro');
}

document.addEventListener('DOMContentLoaded', function() {
    
    function carregarTema() {
        const preferenciaSalva = localStorage.getItem('preferenciaTema');

        if (preferenciaSalva === 'claro') {
            document.body.classList.add('tema-claro');
        }
    }
    carregarTema();
});