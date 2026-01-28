let ismodalOpen = false;
let contrastToggle = false;

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