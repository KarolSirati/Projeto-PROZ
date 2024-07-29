
// Criar um novo elemento de imagem
const logoImg = document.createElement('img');

// Definir os atributos da imagem
logoImg.src = './img/LOGO header.png';
logoImg.alt = 'Logo Moda Online';
logoImg.className = 'logo-img';

// Selecionar o elemento <header> onde a imagem será inserida
const header = document.querySelector('header');

// Inserir a imagem no início do <header>
header.insertBefore(logoImg, header.firstChild);





// Array com informações das imagens
const imagens = [
    {
        container: '.product-div:nth-of-type(1)',
        className: 'img',
        src: './img/produtos/FOTO1 section1.png',
        alt: 'Foto da modelo com cascaco lilás'
    },
    {
        container: '.product-div:nth-of-type(2)',
        className: 'img',
        src: './img/produtos/FOTO2 section1.png',
        alt: 'Foto do modelo com conjunto blusa e short',
    },
    {
        container: '.product-div:nth-of-type(3)',
        className: 'img',
        src: './img/produtos/FOTO3 section1.png',
        alt: 'Foto da modelo com blusa branca e calça',
    },
    {
        container: '.product-div:nth-of-type(4)',
        className: 'img',
        src: './img/produtos/FOTO4 section1.png',
        alt: 'Foto do modelo com conjunto moletom',
    },
    {
        container: '.product-section-2 .product-div:nth-of-type(1)',
        className: 'img',
        src: './img/produtos/FOTO1 section2.png',
        alt: 'Foto de duas modelos com blusa branca',
    },
    {
        container: '.product-section-2 .product-div:nth-of-type(2)',
        className: 'img',
        src: './img/produtos/FOTO2 section2.png',
        alt: 'Foto da modelo com suéter',
    },
    {
        container: '.product-section-2 .product-div:nth-of-type(3)',
        className: 'img',
        src: './img/produtos/FOTO3 section2.png',
        alt: 'Foto da modelo com blusa manga curta',
    },
    {
        container: '.product-section-2 .product-div:nth-of-type(4)',
        className: 'img',
        src: './img/produtos/FOTO4 section2.png',
        alt: 'Foto da modelo com blusa manga cumprida',
    },
    {
        container: '.product-section-3 .product-div:nth-of-type(1)',
        className: 'img',
        src: './img/produtos/FOTO1 section3.png',
        alt: 'Foto blusa feminina manga longa',
    },
    {
        container: '.product-section-3 .product-div:nth-of-type(2)',
        className: 'img',
        src: './img/produtos/FOTO2 section3.png',
        alt: 'Foto da modelo com manga curta',
    },
    {
        container: '.product-section-3 .product-div:nth-of-type(3)',
        className: 'img',
        src: './img/produtos/FOTO3 section3.png',
        alt: 'Foto da modelo conjunto blusa e short',
    },
    {
        container: '.product-section-3 .product-div:nth-of-type(4)',
        className: 'img',
        src: './img/produtos/FOTO4 section3.png',
        alt: 'Foto da modelo com blazer',
    },
    {
        container: '.product-section-4 .product-div:nth-of-type(1)',
        className: 'img',
        src: './img/produtos/FOTO1 section4.png',
        alt: 'Foto blusa feminina manga curta',
    },
    {
        container: '.product-section-4 .product-div:nth-of-type(2)',
        className: 'img',
        src: './img/produtos/FOTO2 section4.png',
        alt: 'Foto da modelo com manga longa',
    },
    {
        container: '.product-section-4 .product-div:nth-of-type(3)',
        className: 'img',
        src: './img/produtos/FOTO3 section4.png',
        alt: 'Foto da modelo com manga longa',
    },
    {
        container: '.product-section-4 .product-div:nth-of-type(4)',
        className: 'img',
        src: './img/produtos/FOTO4 section4.png',
        alt: 'Foto da modelo com conjunto legging e top fitness',
    },


];

// Função para criar e adicionar uma imagem
function adicionarImagem(containerSelector, className, src, alt) {    //Defini a função com 4 parâmetros
    const container = document.querySelector(containerSelector);        // 1. Seleciona o contêiner onde a imagem será adicionada
    if (container) {                                                    // Verifica se o contêiner existe
        const novaImagem = document.createElement('img');                // 3. Cria um novo elemento de imagem <img>
        novaImagem.className = className;                               // 4. Define a classe da imagem
        novaImagem.src = src;                                            // 5. Define o caminho da imagem
        novaImagem.alt = alt;                                            // 6. Define o texto alternativo da imagem
        container.insertBefore(novaImagem, container.firstChild);           // 7. Insere a imagem criada no início do contêiner
    } else {                                                                 // 8. Mostra uma mensagem de erro no console se o contêiner não for encontrado
        console.error(`Contêiner "${containerSelector}" não encontrado.`);
    }
}

// Adicionar todas as imagens na ordem em que estão no array
imagens.forEach(imagem => {                                               //Percorre o array de imagens e adiciona cada imagem no seu respectivo contêiner
    adicionarImagem(imagem.container, imagem.className, imagem.src, imagem.alt);
});