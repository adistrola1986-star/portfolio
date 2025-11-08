function hamburg(){
    const navbar = document.querySelector('.dropdown');
    navbar.style.transform = 'translateY(0px)';
}

function cancel(){
    const navbar = document.querySelector('.dropdown');
    navbar.style.transform = 'translateY(-500px)';
}

const texts = [
    "WEB DEVELOPER",
];

let speed = 100;

const textElements = document.querySelector('.typewriter-text');

let textIndex = 0;
let characterIndex = 0;

function typeWriter(){
    if(characterIndex < texts[textIndex].length){
        textElements.innerHTML += texts[textIndex].charAt(characterIndex);
        characterIndex++;
        setTimeout(typeWriter, speed);
    }
    else{
        setTimeout(eraseText, 1000);
    }
}

function eraseText(){
    if(textElements.innerHTML.length > 0){
        textElements.innerHTML = textElements.innerHTML.slice(0, -1);
        setTimeout(eraseText, 50);
    }
    else{
        textIndex = (textIndex + 1) % texts.length;
        characterIndex = 0;
        setTimeout(typeWriter, 500);
    }
}

(function() {
  emailjs.init("k9XQZMsSl-WA8llj3");
})();

const form = document.getElementById('contactForm');
const status = document.getElementById('form-status');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  emailjs.sendForm('service_iiyw7m9', 'template_nmwdy5c', this)
    .then(() => {
      status.textContent = "✅ Message sent successfully!";
      status.style.color = "#00ff00";
      form.reset();
    })
    .catch((err) => {
      console.error("EmailJS error:", err);
      status.textContent = "❌ Failed to send message. Try again later.";
      status.style.color = "#ff0000";
    });
});

window.onload = typeWriter;