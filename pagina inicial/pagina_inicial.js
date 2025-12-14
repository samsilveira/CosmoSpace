const NASA_API_KEY = 'DEMO_KEY';

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

    // 2. CARREGAR APOD (Com Thumbnail de Vídeo)
    const heroSection = document.getElementById('secao_inicial');
    const titulo = document.querySelector('#secao_inicial h1');
    const subtitulo = document.querySelector('#secao_inicial h4');
    const botaoHero = document.querySelector('#secao_inicial button');

    if (heroSection) {
        try {
            const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}`);
            const data = await res.json();
            
            if (titulo) titulo.innerText = data.title;
            if (subtitulo) subtitulo.innerText = "Imagem Astronômica do Dia (NASA)";

            if (data.media_type === 'image') {
                // Se for imagem normal, usa ela
                heroSection.style.backgroundImage = `url('${data.url}')`;
                
            } else if (data.media_type === 'video') {
                console.log("APOD é vídeo. Tentando pegar thumbnail...", data.url);
                
                // Tenta extrair o ID do vídeo do YouTube usando Regex
                // Funciona para URLs com 'embed/', 'watch?v=' ou 'youtu.be/'
                const youtubeMatch = data.url.match(/(?:embed\/|v=|\/)([\w-]{11})/);

                if (youtubeMatch && youtubeMatch[1]) {
                    const videoId = youtubeMatch[1];
                    // Monta a URL da thumbnail de alta qualidade
                    const thumbUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
                    
                    // Aplica como fundo
                    heroSection.style.backgroundImage = `url('${thumbUrl}')`;
                }

                // Ajusta o botão para assistir
                if (botaoHero) {
                    botaoHero.innerText = "Assistir Vídeo do Dia";
                    botaoHero.onclick = () => window.open(data.url, '_blank');
                }
            }
        } catch (error) {
            console.error("Falha ao carregar APOD:", error);
        }
    }

    // 3. ENVIO DO FORMULÁRIO
    const botaoEnviar = document.getElementById('btnenviar');
    if (botaoEnviar) {
        botaoEnviar.addEventListener('click', async function(evento) {
            evento.preventDefault();
            
            const nome = document.getElementById('nome').value;
            const email = document.getElementById('email').value;
            const mensagem = document.getElementById('mensagem').value;

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