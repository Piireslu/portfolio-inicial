// Selecionar os links do menu de navegação
const navLinks = document.querySelectorAll('nav ul li a');

// Função para suavizar o scroll até a seção correspondente ao link clicado
function smoothScroll(target) {
  const element = document.querySelector(target);
  window.scrollTo({
    top: element.offsetTop,
    behavior: 'smooth'
  });
}

// Adicionar o evento de clique a cada link do menu de navegação
navLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault(); // Evitar o comportamento padrão do link
    const target = link.getAttribute('href'); // Obtém o valor do atributo href
    smoothScroll(target); // Chama a função para suavizar o scroll até a seção correspondente
  });
});

// Selecionar o formulário de contato
const contactForm = document.querySelector('form');

// Função para manipular o envio do formulário
function handleSubmit(event) {
  event.preventDefault(); // Evitar o comportamento padrão de envio do formulário
  // Aqui você pode adicionar a lógica para processar os dados do formulário
  // Por exemplo, enviar os dados para um servidor ou exibir uma mensagem de sucesso
  alert('Formulário enviado com sucesso!');
  contactForm.reset(); // Limpar os campos do formulário
}

// Adicionar o evento de submit ao formulário
contactForm.addEventListener('submit', handleSubmit);