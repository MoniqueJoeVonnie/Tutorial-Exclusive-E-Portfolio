let ismodalOpen = false;
let contrastToggle = false;
const scaleFactor = 1 / 20;

function moveBackgroundd(event) {
    const shapes = document.querySelectorAll(".shape")
    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor;
   
    for (let i = 0; i < shapes.length; ++i) {
        const isOdd = i % 2 !== 0;
        const boolInt = isOdd ? -1 : 1;
        shapes[i].style.transform = 'translate(${x * boolInt}px, ${y * boolInt}px)'
    }
}

function toggleContrast() {
    contrastToggle = !contrastToggle;
    if (contrastToggle) {
        document.body.classList += " dark-theme"
    }
    else {
        document.body.classList.remove(" dark-theme")
    }
}

function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading')
    const success = document.querySelector('.modal__overlay--success')

    emailjs
        .sendForm(
            'service_rw18ppl',
            'template_bbgffga',
          event.target,
            'uGyalPMFUSbqaTqPS'
        ).then(() => {
          loading.classList.remove("modal__overlay--visible");
          success.classList.add("modal__overlay--visible")
        }).catch(() => {
          loading.classList.remove("modal__overlay--visible");
          alert(
            "The email service is temporarily unavailable.  Please contact me directly on jovonnie.mb@gmail.com"
          );
        })
}

 // ismodalOpen already declared above
function toggleModal() {
    if (ismodalOpen) {
        ismodalOpen = false
        return document.body.classList.remove("modal--open");
    }
    ismodalOpen = true;
    document.body.classList.add("modal--open");
}