document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector('.container');
    const registerBtn = document.querySelector('.btn-registration'); 
    const loginBtn = document.querySelector('.btn-login');

    registerBtn.addEventListener('click', () => { 
        container.classList.add('active');
    });

    loginBtn.addEventListener('click', () => { 
        container.classList.remove('active');
    });
});
