export default function initModal() {
    const botaoAbrir = document.querySelector('[data-modal="abrir"]');
    const botaoFechar = document.querySelector('[data-modal="fechar"]');
    const containerModal = document.querySelector('[data-modal="container"]');

    if (botaoAbrir && botaoFechar && containerModal) {
        // Abrir modal
        botaoAbrir.addEventListener('click', (event) => {
            event.preventDefault();
            containerModal.classList.add('ativo');
        });

        // Fechar modal (botão X)
        botaoFechar.addEventListener('click', (event) => {
            event.preventDefault();
            containerModal.classList.remove('ativo');
        });

        // Fechar modal ao clicar fora
        containerModal.addEventListener('click', (event) => {
            if (event.target === containerModal) {
                containerModal.classList.remove('ativo');
            }
        });
    }

    //Limpar valor do input apenas no primeiro foco
    const inputs = document.querySelectorAll('input');
    inputs.forEach((input) => {
        input.addEventListener('focus', () => {
            if (input.value !== '') {
                input.value = ''; // Limpa apenas na primeira vez
            }
        });
    });

    // Botão submit e mensagem "Sent"
    const btnSubmit = document.querySelector('#button-modal button');
    const containerCheck = document.querySelector('[data-modal="container-check"]');
    const firstInput = inputs[0]; // Primeiro campo de entrada
    const asterisco = document.querySelector('#obrigatorio')

    if (btnSubmit && containerCheck && firstInput) {
        btnSubmit.addEventListener('click', (event) => {
            event.preventDefault();

            // Verifica se o primeiro input foi preenchido
            if (firstInput.value.trim() === '') {
                asterisco.style.color = 'red'
                firstInput.style.border = '2px solid red'
                return; // Interrompe o envio
            }

            // Fecha o modal principal
            containerModal.classList.remove('ativo');

            // Exibe a mensagem de "Sent"
            containerCheck.classList.add('ativo');

            // Remove a mensagem após 1.6 segundos
            setTimeout(() => {
                containerCheck.classList.remove('ativo');
            }, 1600);
        });
    }
}