// tirar a mensagem padrao da tela
// refatorar o codigo pq eu achei as funções repetitivas

const nome = document.querySelector('[data-nome]');
const email = document.querySelector('[data-email]');
const assunto = document.querySelector('[data-assunto]');
const mensagem = document.querySelector('[data-mensagem]');

function validaFormulario() {
    validaNome();
    validaEmail();
    validaAssunto();
    validaMensagem();
}

const validaNome = () => {
    const erroNome = document.querySelector('[data-erro-nome]');

    if(nome.value === '') {
        nome.classList.add('--invalido');
        erroNome.innerHTML = 'O campo nome não pode estar vazio!';
    } else {
        erroNome.innerHTML = '';
        nome.classList.remove('--invalido');
    }
}

const validaEmail = () => {
    const erroEmail = document.querySelector('[data-erro-email]');

    if(email.value === '') {
        email.classList.add('--invalido');
        erroEmail.innerHTML = 'O campo email não pode estar vazio'
    } else {
        if(email.value.indexOf('@') == -1) {
            email.classList.add('--invalido');
            erroEmail.innerHTML = 'O email não é valido'
        } else {
            erroEmail.innerHTML = '';
            email.classList.remove('--invalido');
        }
    }
}

const validaAssunto = () => {
    const erroAssunto = document.querySelector('[data-erro-assunto]');

    if(assunto.value === '') {
        assunto.classList.add('--invalido');
        erroAssunto.innerHTML = 'Coloque um assunto para facilitar :)';
    } else {
        erroAssunto.innerHTML = '';
        assunto.classList.remove('--invalido');
    }
}

const validaMensagem = () => {
    const erroMensagem = document.querySelector('[data-erro-mensagem]');

    if(mensagem.value === '') {
        mensagem.classList.add('--invalido');
        erroMensagem.innerHTML = 'Coloque a sua mensagem aqui';
    } else {
        erroMensagem.innerHTML = '';
        mensagem.classList.remove('--invalido');
    }
}