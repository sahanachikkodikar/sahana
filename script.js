const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');

const btnpopup = document.querySelector('.btnopoup-popoup');

const iconClose = document.querySelector('.icon-close');

registerLink.addEventListener('click', ()=>{

    wrapper.classList.add('active');
});


loginLink.addEventListener('click', ()=>{
    
    wrapper.classList.remove('active');
});

btnpopup.addEventListener('click', ()=>{

    wrapper.classList.add('active-opoup');
});

iconClose.addEventListener('click', ()=>{

    wrapper.classList.remove('active-opoup');
});