// 
//
// 

function contact(event) {
    event.preventDefault();
    const loading = document.querySelector(' .modal__overlay--loading')
    const success = document.querySelector(' .modal__overlay--success')

    emailjs
        .sendForm(
            'service_rw18ppl',
            'template_bbgffga',
          event.target,
            'uGyalPMFUSbqaTqPS'
        ).then(() => {
          loading.classList.remove("modal__overlay--visible");
          success.classList += " modal__overlay--visible"
        }).catch(() => {
          loading.classList.remova("modal__overlay--visible");
          alert(
            "The email service is temporarily unavailable.  Please contact me directly on jovonnie.mb@gmail.com"
          );
        })
}

let isModalOpen = false;
function toggleModal() {
    if (ismodalOpen) {
        isModalOpen = false
        return document.body.classList.remove("modal--open");
    }
    isModalOpen = true;
    document.body.classList += " modal--open";
}