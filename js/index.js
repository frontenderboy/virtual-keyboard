window.addEventListener('keydown', (event) => {
    const code = event.code;
    const keyboardBtn = document.querySelector(`[data-codeName="${code}"]`);
    
    keyboardBtn.classList.add('active-btn');
    event.preventDefault();

    console.log(event.code)
})