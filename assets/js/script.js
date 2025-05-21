function menuShow() {
  const menuMobile = document.querySelector('.mobile-menu');
  const icon = document.querySelector('.icon');

  menuMobile.classList.toggle('open');
  const isOpen = menuMobile.classList.contains('open');
  icon.src = isOpen ? "assets/img/close_white_36dp.svg" : "assets/img/menu_white_36dp.svg";
}

// Submenu por clique no mobile
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".mobile-submenu-toggle");
  const submenu = document.querySelector(".mobile-submenu");

  if (toggle && submenu) {
    toggle.addEventListener("click", (e) => {
      e.preventDefault();
      submenu.classList.toggle("open");
    });
  }
});

const apiKey = 'AIzaSyCQio1zAvkFVqlCZ0_5Tqf76SzfgD_qEmY';
const channelId = 'UCtHIC7WHZd9B2lSLJ0QgEwA';
const maxResults = 3;

fetch(`https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet&order=date&maxResults=${maxResults}`)
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('videos-container');
    data.items.forEach(item => {
      if (item.id.videoId) {
        const video = document.createElement('iframe');
        video.src = `https://www.youtube.com/embed/${item.id.videoId}`;
        video.width = '100%';
        video.height = '315';
        video.allowFullscreen = true;
        video.frameBorder = '0';
        container.appendChild(video);
      }
    });
  })
  .catch(error => {
    console.error('Erro ao carregar vídeos:', error);
  });






const bannerContainer = document.querySelector('.banner-container');

const imagens = [
  'https://i.pinimg.com/736x/b2/ef/6a/b2ef6a4ec5ffc14557f7ae7a7e2f6f38.jpg',
  'https://i.pinimg.com/736x/da/a5/ee/daa5eebb440da59072f167007acad5a1.jpg',
  'https://i.pinimg.com/736x/9f/e5/91/9fe591fb1931e63344fcbb1b5cfaae85.jpg'
];

let index = 0;

function trocarImagem() {
  bannerContainer.style.backgroundImage = `url('${imagens[index]}')`;
  index = (index + 1) % imagens.length;
}

// Inicia com a primeira imagem
trocarImagem();

// Troca a imagem a cada 5 segundos
setInterval(trocarImagem, 7000);



// Remover o bloqueio de inspeção de código e combinações de teclas (F12, Ctrl+Shift+I, etc)
document.addEventListener('keydown', function(event) {
  if (event.key === 'F12' || (event.ctrlKey && event.shiftKey && event.key === 'I') || (event.ctrlKey && event.shiftKey && event.key === 'J') || (event.ctrlKey && (event.key === 'U' || event.key === 'S' || event.key === 'P'))) {
      event.preventDefault();
      event.stopPropagation();
  }
});

// Permitir o clique direito na página
document.addEventListener('contextmenu', function(event) {
  event.preventDefault();  // Permite o clique direito
});

// Remover redirecionamento automático baseado no tamanho da janela (evitar redirecionamento errado)
setInterval(() => {
  const outerWidth = window.outerWidth;
  const innerWidth = window.innerWidth;
  const outerHeight = window.outerHeight;
  const innerHeight = window.innerHeight;

  if (outerWidth - innerWidth > 160 || outerHeight - innerHeight > 160) {
      // Não realizar redirecionamento
  }
}, 1000);





