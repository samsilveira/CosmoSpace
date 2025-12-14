const NASA_API_KEY = 'A7pfiQ7URNE1mSWejwiks3R2hv0qiLpT6KdVGJvK';

function alternarTema() {
    const corpoPagina = document.body;
    const conteudoPrincipal = document.querySelector('main');
    
    corpoPagina.classList.toggle('tema-claro');
    if (conteudoPrincipal) conteudoPrincipal.classList.toggle('tema-claro');

    const estaClaro = corpoPagina.classList.contains('tema-claro');
    localStorage.setItem('preferenciaTema', estaClaro ? 'claro' : 'escuro');
}

document.addEventListener('DOMContentLoaded', async function() {
    
    // 1. CARREGAR TEMA
    const preferenciaSalva = localStorage.getItem('preferenciaTema');
    if (preferenciaSalva === 'claro') {
        document.body.classList.add('tema-claro');
        const main = document.querySelector('main');
        if(main) main.classList.add('tema-claro');
    }

    // 2. CARREGAR IMAGEM DO DIA
    const heroSection = document.getElementById('secao_inicial');
    const titulo = document.querySelector('#secao_inicial h1');
    const subtitulo = document.querySelector('#secao_inicial h4');

    if (heroSection) {
        try {
            const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}`);
            if (!res.ok) throw new Error(`Erro NASA: ${res.status}`);
            
            const data = await res.json();
            
            heroSection.style.backgroundImage = `url('${data.url}')`;
            if (titulo) titulo.innerText = data.title;
            if (subtitulo) subtitulo.innerText = "Imagem Astronômica do Dia";
        } catch (error) {
            console.error("Falha ao carregar APOD:", error);
            // Mantém a imagem de fundo padrão do CSS se der erro
        }
    }

    // 3. ENVIO DO FORMULÁRIO (Integração Backend)
    const botaoEnviar = document.getElementById('btnenviar');
    if (botaoEnviar) {
        botaoEnviar.addEventListener('click', async function(evento) {
            evento.preventDefault();
            
            const nome = document.getElementById('nome').value;
            const email = document.getElementById('email').value;
            const mensagem = document.getElementById('mensagem').value;

            // Feedback visual
            const textoOriginal = botaoEnviar.innerText;
            botaoEnviar.innerText = "Enviando...";
            botaoEnviar.disabled = true;

            try {
                const response = await fetch('http://localhost:3000/api/contact', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ nome, email, mensagem })
                });

                const resultado = await response.json();

                if (response.ok) {
                    alert("Mensagem enviada com sucesso! 🚀");
                    document.querySelector('form').reset();
                } else {
                    alert("Erro: " + (resultado.error || "Verifique os campos."));
                }
            } catch (erro) {
                console.error(erro);
                alert("Erro ao conectar com o servidor.");
            } finally {
                botaoEnviar.innerText = textoOriginal;
                botaoEnviar.disabled = false;
            }
        });
    }
});