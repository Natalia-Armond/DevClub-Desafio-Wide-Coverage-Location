// document.querySelector('.learn-more-button').addEventListener('click', function () {
//     alert('Learn more about our services!');
// });

// document.querySelectorAll('.sign-up-button').forEach(button => {
//     button.addEventListener('click', function () {
//         alert('Sign up for our services!');
//     });
// });
// Seleciona os elementos do DOM
const loginButton = document.getElementById('loginLink'); // Altere para o botão de login
const signUpButton = document.querySelector('.sign-up-button');
const loginModal = document.getElementById('loginModal');
const signupModal = document.getElementById('signupModal');
const closeLoginModal = loginModal.querySelector('.close');
const closeSignupModal = signupModal.querySelector('.close-signup');

// Função para abrir o modal de login
function openLoginModal() {
    console.log("Abrindo modal de login");
    loginModal.classList.remove('hidden');
}
// Função para abrir o modal de cadastro
function openSignupModal() {
    signupModal.classList.remove('hidden');
}

// Função para fechar o modal de login
function closeLoginModalFunc() {
    loginModal.classList.add('hidden');
}

// Função para fechar o modal de cadastro
function closeSignupModalFunc() {
    signupModal.classList.add('hidden');
}

// Adiciona eventos de clique
loginButton.addEventListener('click', openLoginModal);
signUpButton.addEventListener('click', openSignupModal);
closeLoginModal.addEventListener('click', closeLoginModalFunc);
closeSignupModal.addEventListener('click', closeSignupModalFunc);

// Fecha o modal ao clicar fora dele
window.addEventListener('click', (event) => {
    if (event.target === loginModal) {
        closeLoginModalFunc();
    }
    if (event.target === signupModal) {
        closeSignupModalFunc();
    }
});