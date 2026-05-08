/* ========== MODO ESCURO ========== */
const darkModeToggle = document.getElementById('darkModeToggle');
const htmlElement = document.documentElement;

// Verificar se o usuário tem preferência salva
const savedDarkMode = localStorage.getItem('darkMode');
if (savedDarkMode === 'true') {
    htmlElement.classList.add('dark-mode');
    darkModeToggle.textContent = '☀️';
} else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    // Se não tem preferência salva, usar preferência do sistema
    htmlElement.classList.add('dark-mode');
    darkModeToggle.textContent = '☀️';
    
}

// Toggle dark mode
darkModeToggle.addEventListener('click', function() {
    htmlElement.classList.toggle('dark-mode');
    const isDarkMode = htmlElement.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
    darkModeToggle.textContent = isDarkMode ? '☀️' : '🌙';
    darkModeToggle.style.animation = 'pulse 0.6s ease-out';
});

/* ========== ANIMAÇÕES AO SCROLL ========== */
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.7s ease-out';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observar elementos após o carregamento
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('section, .project-item, .skill-category, .edu-item').forEach(el => {
        el.style.animation = 'fadeInUp 0.7s ease-out forwards';
        observer.observe(el);
    });
});

/* ========== EFEITO RIPPLE NOS BADGES ========== */
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.badge').forEach(badge => {
        badge.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            ripple.style.position = 'absolute';
            ripple.style.borderRadius = '50%';
            ripple.style.background = 'rgba(255, 255, 255, 0.5)';
            ripple.style.width = '20px';
            ripple.style.height = '20px';
            ripple.style.animation = 'expand 0.6s ease-out';
            
            const rect = this.getBoundingClientRect();
            ripple.style.left = (e.clientX - rect.left - 10) + 'px';
            ripple.style.top = (e.clientY - rect.top - 10) + 'px';
        });
    });
});

/* ========== UPLOAD DE IMAGENS DOS PROJETOS ========== */
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.project-image-container').forEach(container => {
        container.addEventListener('click', function() {
            const input = document.createElement('input');
            input.type = 'file';
            input.accept = 'image/*';
            input.onchange = (e) => {
                const file = e.target.files[0];
                const reader = new FileReader();
                reader.onload = (event) => {
                    // Cria a imagem com efeito de fade
                    const img = document.createElement('img');
                    img.src = event.target.result;
                    img.style.animation = 'fadeIn 0.6s ease-out';
                    
                    // Remove o placeholder se existir
                    const placeholder = this.querySelector('.project-image-placeholder');
                    if (placeholder) {
                        placeholder.remove();
                    }
                    
                    // Limpa o container e adiciona a imagem
                    this.innerHTML = '';
                    this.appendChild(img);
                };
                reader.readAsDataURL(file);
            };
            input.click();
        });
    });
});

/* ========== ANIMAÇÃO DE CLICK NOS LINKS DE CONTATO ========== */
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('a[href^="mailto:"], a[href^="tel:"]').forEach(link => {
        link.addEventListener('click', function(e) {
            this.style.animation = 'pulse 0.6s ease-out';
        });
    });
});

/* ========== MODAL DE CONTATO ========== */
document.addEventListener('DOMContentLoaded', () => {
    const contactModal = document.getElementById('contactModal');
    const closeModal = document.getElementById('closeModal');
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    // Fechar modal ao clicar no botão de fechar
    closeModal.addEventListener('click', () => {
        contactModal.classList.remove('show');
        resetFormMessage();
    });

    // Fechar modal ao clicar fora do conteúdo
    contactModal.addEventListener('click', (e) => {
        if (e.target === contactModal) {
            contactModal.classList.remove('show');
            resetFormMessage();
        }
    });

    // Fechar modal com tecla Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            contactModal.classList.remove('show');
            resetFormMessage();
        }
    });

    // Submissão do formulário
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const submitBtn = contactForm.querySelector('.form-submit');
        const originalText = submitBtn.textContent;
        submitBtn.disabled = true;
        submitBtn.textContent = 'Enviando...';

        try {
            // Simular envio (integrar com Emailjs ou backend conforme necessário)
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            // Sucesso
            formMessage.textContent = '✅ Mensagem enviada com sucesso! Entrarei em contato em breve.';
            formMessage.className = 'form-message success';
            contactForm.reset();
            
            setTimeout(() => {
                contactModal.classList.remove('show');
                resetFormMessage();
            }, 3000);
        } catch (error) {
            formMessage.textContent = '❌ Erro ao enviar mensagem. Tente novamente ou envie um email diretamente.';
            formMessage.className = 'form-message error';
        } finally {
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;
        }
    });

    // Função auxiliar para resetar mensagem
    function resetFormMessage() {
        formMessage.textContent = '';
        formMessage.className = 'form-message';
    }
});

/* ========== ATIVAÇÃO DE ANIMAÇÕES AO CARREGAR ========== */
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});
