// ==========================================
// AgroForte - Script Principal
// Projeto Agrinho 2026
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    initMenuMobile();
    initSimuladorProdutividade();
    initSmoothScroll();
    initFormContato();
});

// ==========================================
// Menu Mobile
// ==========================================
function initMenuMobile() {
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });

        // Fechar menu ao clicar em um link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                menuToggle.classList.remove('active');
            });
        });
    }
}

// ==========================================
// Simulador de Produtividade
// ==========================================
function initSimuladorProdutividade() {
    const form = document.getElementById('form-simulador');
    const resultado = document.getElementById('resultado');
    const textoProducao = document.getElementById('texto-producao');
    
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Pegar valores do formulário
            const area = parseFloat(document.getElementById('area').value);
            const cultura = parseFloat(document.getElementById('cultura').value);
            const pratica = parseFloat(document.getElementById('pratica').value);
            
            // Validar valores
            if (isNaN(area) || area <= 0) {
                alert('Por favor, insira uma área válida!');
                return;
            }
            
            // Calcular produção base
            const producaoBase = area * cultura;
            
            // Calcular aumento com prática sustentável
            const aumento = producaoBase * (pratica / 100);
            const producaoTotal = producaoBase + aumento;
            
            // Mostrar resultado
            textoProducao.innerHTML = `
                <strong>Área:</strong> ${area} hectares<br>
                <strong>Produção Base:</strong> ${producaoBase.toFixed(0)} sacas<br>
                <strong>Aumento com Prática Sustentável:</strong> +${aumento.toFixed(0)} sacas<br>
                <strong>Produção Total:</strong> <span class="destaque">${producaoTotal.toFixed(0)} sacas</span>
            `;
            
            resultado.style.display = 'block';
        });
    }
}

// ==========================================
// Smooth Scroll (Navegação Suave)
// ==========================================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('.header-principal').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ==========================================
// Formulário de Contato
// ==========================================
function initFormContato() {
    const formContato = document.querySelector('.form-contato');
    
    if (formContato) {
        formContato.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Pegar valores
            const nome = document.getElementById('nome').value;
            const email = document.getElementById('email').value;
            
            // Validar
            if (nome && email) {
                alert(`Obrigado, ${nome}! Messagem enviada com sucesso.`);
                formContato.reset();
            }
        });
    }
}

// ==========================================
// Efeito de Animação no Scroll
// ==========================================
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header-principal');
    
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});
