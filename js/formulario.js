function mostraPopup (input, label){
    input.addEventListener('focus',() =>{
        label.classList.add('required-popup')

    })
        input.addEventListener('blur', () =>{
            label.classList.remove('required-popup')

        })

    }
const form   = document.getElementById('form');
const campos = document.querySelectorAll('.required');
const spans  = document.querySelectorAll('.span-required');


form.addEventListener('submit', (event) => {
    event.preventDefault();
    nameValidate();
    emailValidate();
    mainPasswordValidate();
    comparePassword();
});


function setError(index){
    campos[index].style.border = '2px solid #e63636';
    spans[index].style.display = 'block';
}

function removeError(index){
    campos[index].style.border = '';
    spans[index].style.display = 'none';
}

let nomeInput = document.getElementById("nome");
let nomeLabel = document.querySelector('label[for="nome"]');
let nomeHelper = document.getElementById("nome-helper");

function nameValidate(){
  
        nomeInput.addEventListener('input',(e) =>{
            let valor = e.target.value.trim();
            const numberRegex = /\d/;
            const specialCharRegex = /[^a-zA-Z\s]/;
            const repeatedCharRegex = /(\b[a-zA-Z]*([a-zA-Z])\2{2,}[a-zA-Z]*\b)/i;
            if (valor.length < 3 || numberRegex.test(valor) || specialCharRegex.test(valor) || repeatedCharRegex.test(valor)){
         nomeInput.classList.remove('correct');
         nomeInput.classList.add('error');
         nomeHelper.innerText = 'Digite um nome válido';
         nomeHelper.classList.add('visible');
        } else {
         nomeInput.classList.remove('error');
         nomeHelper.innerText = ''; 
         nomeHelper.classList.remove('visible');
         nomeInput.classList.add('correct');
        }
     })
    }

function emailValidate(){
    emailInput.addEventListener('input', (e) =>{
        let valor = e.target.value.trim();
        const emailInput = document.getElementById('email');
        const emailLabel = document.querySelector('label[for="email"]');
        const emailHelper = document.getElementById('email-helper');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(valor.includes('@')&& valor.includes('.com') || (emailRegex.test(valor))){
            emailInput.classList.add('correct');
            emailInput.classList.remove('error');
            emailInput.classList.remove('visible');
        } else{
            emailInput.classList.add('error');
            emailInput.classList.remove('correct');
            emailHelper.classList.visible('visible');
            emailHelper.innerText = "O e-mail deve conter '@' '.com'";
        }
    })
}


function mainPasswordValidate(){
    if(campos[2].value.length < 8)
    {
        setError(2);
    }
    else
    {
        removeError(2);
        comparePassword();
    }
}

function comparePassword(){
    if(campos[2].value == campos[3].value && campos[3].value.length >= 8)
    {
        removeError(3);
    }
    else
    {
        setError(3);
    }
}
