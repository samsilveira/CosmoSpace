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
        botaoEnviar.addEventListener('click', async function(evento) {
            evento.preventDefault(); // Impede recarregar a tela

            const dados = {
                nome: document.getElementById('nome').value,
                email: document.getElementById('email').value,
                mensagem: document.getElementById('mensagem').value
            };

            // Efeito visual de carregamento
            const textoOriginal = botaoEnviar.innerText;
            botaoEnviar.innerText = "Enviando...";
            botaoEnviar.disabled = true;

            try {
                // Rota do seu BACKEND
                const response = await fetch('http://localhost:3000/api/contact', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(dados)
                });

                const resultado = await response.json();

                if (response.ok) {
                    alert("Mensagem enviada com sucesso! 🚀");
                    document.querySelector('form').reset();
                } else {
                    alert("Erro: " + (resultado.error || "Verifique os dados."));
                }

            } catch (erro) {
                console.error(erro);
                alert("Erro ao conectar com o servidor. O Backend está rodando?");
            } finally {
                botaoEnviar.innerText = textoOriginal;
                botaoEnviar.disabled = false;
            }
        });
    }
});