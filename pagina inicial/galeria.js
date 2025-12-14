const NASA_API_KEY = 'A7pfiQ7URNE1mSWejwiks3R2hv0qiLpT6KdVGJvK';

function alternarTema() {
    const corpoPagina = document.body;
    corpoPagina.classList.toggle('tema-claro');
    const estaClaro = corpoPagina.classList.contains('tema-claro');
    localStorage.setItem('preferenciaTema', estaClaro ? 'claro' : 'escuro');
}

document.addEventListener('DOMContentLoaded', async function() {
    
    // 1. TEMA
    const preferenciaSalva = localStorage.getItem('preferenciaTema');
    if (preferenciaSalva === 'claro') {
        document.body.classList.add('tema-claro');
    }

    // 2. GALERIA (Com proteção contra erros)
    const sectionGaleria = document.querySelector('section');
    
    if (sectionGaleria) {
        // Limpa e mostra Loading
        sectionGaleria.innerHTML = '<p style="grid-column: 1/-1; text-align:center;">Carregando imagens de Marte...</p>';

        try {
            // Tenta buscar fotos do Rover Curiosity (Sol 1000)
            const res = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=1&api_key=${NASA_API_KEY}`);
            
            // VERIFICAÇÃO CRUCIAL: Se deu erro (404, 500, etc), para aqui.
            if (!res.ok) {
                throw new Error(`Erro na API da NASA: ${res.status}`); 
            }

            const data = await res.json();

            // Verifica se existem fotos na resposta
            if (!data.photos || data.photos.length === 0) {
                throw new Error("Nenhuma foto encontrada para esta data.");
            }
            
            // Pega as 6 primeiras
            const fotos = data.photos.slice(0, 6);
            sectionGaleria.innerHTML = ''; // Limpa o loading

            fotos.forEach(foto => {
                const card = document.createElement('div');
                card.style.backgroundImage = `url('${foto.img_src}')`;
                card.style.backgroundSize = 'cover';
                card.style.backgroundPosition = 'center';
                card.title = `Rover: ${foto.rover.name} | Data: ${foto.earth_date}`;
                sectionGaleria.appendChild(card);
            });

        } catch (erro) {
            console.error(erro);
            // Mostra mensagem amigável na tela em vez de quebrar
            sectionGaleria.innerHTML = `
                <div style="grid-column: 1/-1; text-align:center; padding: 20px;">
                    <p>⚠️ Não foi possível carregar as imagens agora.</p>
                    <small style="opacity:0.7">Detalhe: ${erro.message}</small>
                </div>
            `;
        }
    }
});