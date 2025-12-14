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

    // 2. GALERIA (Usando NASA Image and Video Library)
    const sectionGaleria = document.querySelector('section');
    
    if (sectionGaleria) {
        sectionGaleria.innerHTML = '<p style="grid-column: 1/-1; text-align:center;">Carregando imagens de Marte...</p>';

        try {
            // Busca por "mars rover" apenas imagens
            const res = await fetch('https://images-api.nasa.gov/search?q=mars%20rover&media_type=image');
            
            if (!res.ok) throw new Error(`Erro API: ${res.status}`);

            const data = await res.json();
            
            const items = data.collection.items.slice(0, 6); 

            sectionGaleria.innerHTML = ''; 

            if (items.length === 0) {
                sectionGaleria.innerHTML = '<p>Nenhuma imagem encontrada.</p>';
                return;
            }

            items.forEach(item => {
                // O link da imagem fica em links[0].href
                const imgUrl = item.links[0].href;
                const titulo = item.data[0].title;
                const dataFoto = item.data[0].date_created.substring(0, 10); // Data YYYY-MM-DD

                const card = document.createElement('div');
                // Ajuste visual
                card.style.backgroundImage = `url('${imgUrl}')`;
                card.style.backgroundSize = 'cover';
                card.style.backgroundPosition = 'center';
                card.style.position = 'relative';
                
                // Tooltip simples
                card.title = `${titulo} | ${dataFoto}`;
                
                sectionGaleria.appendChild(card);
            });

        } catch (erro) {
            console.error(erro);
            sectionGaleria.innerHTML = `
                <div style="grid-column: 1/-1; text-align:center; padding: 20px;">
                    <p>⚠️ Não foi possível carregar a galeria.</p>
                </div>
            `;
        }
    }
});