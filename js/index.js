window.addEventListener('keydown', (event) => {
    const code = event.code;
    const keyboardBtn = document.querySelector(`[data-codeName="${code}"]`);
    
    keyboardBtn.classList.add('active-btn');
    event.preventDefault();
})

let isMobile = {
	Android: function() {return navigator.userAgent.match(/Android/i);},
	BlackBerry: function() {return navigator.userAgent.match(/BlackBerry/i);},
	iOS: function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},
	Opera: function() {return navigator.userAgent.match(/Opera Mini/i);},
	Windows: function() {return navigator.userAgent.match(/IEMobile/i);},
	any: function() {return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());}
};

const keyboard = document.querySelector('.keyboard');
const errorText = document.querySelector('.error-text');

if(isMobile.any()) {
    keyboard.classList.add('none');
    errorText.classList.add('visible')
}