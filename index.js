let isModalOpen = false;
let contrastToggle = false;
const scaleFactor = 1 / 20;

AOS.init(); // Initialize AOS plugin
// AOS = Animate On scroll

function toggleContrast() {
  // Light mode toggler
  contrastToggle = !contrastToggle;
  if (contrastToggle) {
    document.body.classList += " dark-theme";
  } else {
    document.body.classList.remove("dark-theme");
  }
}

function contact() {
  // Email plugin stuff
  event.preventDefault();
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");
  loading.classList += " modal__overlay--visible";
  emailjs
    .sendForm(
      "service_an9eukr",
      "template_2bfcyon",
      event.target,
      "CYWsMgTd3elfUNQzp"
    )
    .then(() => {
      loading.classList.remove("modal__overlay-visible");
      success.classList += " modal__overlay--visible";
    })
    .catch(() => {
      loading.classList.remove("modal__overlay--visible");
      alert(
        "The email service is temporarily unavailable. Please contact me directly on gabriel@gabmort.me"
      );
    });
}

function openModal() {
  // Toggle contact modal
  isModalOpen = true;
  document.body.classList += " modal--open";
  window.scrollTo(0, 0);
}

function closeModal() {
    isModalOpen = false;
    document.body.classList.remove("modal--open");
}

function toggleModal() {
  if (isModalOpen) {
    closeModal();
  }
  else {
    openModal();
  }
}

document.addEventListener('keydown', function(event){
  if(event.key == "Escape"){
    closeModal();
  }
});