// TYPING EFFECT
const text = "Anasua Chattaraj";
let index = 0;

function type() {
  if (index < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(index);
    index++;
    setTimeout(type, 80);
  }
}

type();


// FADE ON SCROLL
const faders = document.querySelectorAll(".fade");

window.addEventListener("scroll", () => {
  faders.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      el.classList.add("show");
    }
  });
});


// NAVBAR HIDE&SHOW
let lastScroll = 0;
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  let current = window.pageYOffset;

  if (current > lastScroll) {
    navbar.style.top = "-80px";
  } else {
    navbar.style.top = "0";
  }

  lastScroll = current;
});


// SMOOTH SCROLL
document.querySelectorAll('.nav-right a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({
      behavior: 'smooth'
    });
  });
});


// CONTACT FORM SUBMIT
const form = document.getElementById("contactForm");

if (form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault(); // stop page refresh

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    try {
      const res = await fetch("/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, email, message })
      });

      const data = await res.text();
      alert(data);

      form.reset();
    } catch (err) {
      console.error("Error:", err);
      alert("Error sending message");
    }
  });
}