let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// --------scroll section active link-------------------
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((Links) => {
        Links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  // ---------------Sticky navbar-----------------------
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  // --------remove toggle when click navbar link (smartphone use navbar)-------------------
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

// ---------------Scroll reveal----------------------

ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".myimg, .heading, .contact, .about-content1", {
  origin: "top",
});
ScrollReveal().reveal(
  " .services-container, .about-content, .projects-box, .contact form",
  { origin: "bottom" }
);
ScrollReveal().reveal(".side img, .home-content h1, .about-content h3", {
  origin: "left",
});
ScrollReveal().reveal(".about-img, .about-content p", {
  origin: "right",
});

// -----------------typed js---------------------

const typed = new Typed(".multiple-text", {
  strings: [
    " ",
    "Hello! 👋",
    "greetings! 🤓",
    "Hey there! 👉",
    "Howdy! 😎",
    "🤩😅😇",
  ],
  typeSpeed: 170,
  backSpeed: false,
  backDelay: false,
  loop: true,
});
