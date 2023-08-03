$(function () {


  
})

////////////////////////////////////////////////////////////////////////////////-dark-mode
const switchModeBtn = document.querySelector(".dark-mode-btn");


if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
  document.body.classList.add("switch");
}

if (localStorage.getItem('darkMode') === 'dark') {
  document.body.classList.add("switch");
} else if (localStorage.getItem("darkMode") === "light") {
  document.body.classList.remove("switch");
}

window.matchMedia("(prefers-color-scheme: dark)").addEventListener('change', (event) => {
  const newColorScheme = event.matches ? "dark" : 'light';

  if (newColorScheme === 'dark') {
    document.body.classList.add("switch");
    localStorage.setItem('darkMode', 'dark')
  } else {
    document.body.classList.remove("switch");
    localStorage.setItem('darkMode', 'light')
  }
})

switchModeBtn.onclick = function () {
  const darkMode = document.body.classList.toggle("switch");

  if (darkMode) {
    localStorage.setItem('darkMode', 'dark')
  }  else {
    localStorage.setItem('darkMode', 'light')
  }
};

////////////////////////////////////////////////////////////////////////////////-wowjs

new WOW().init();

////////////////////////////////////////////////////////////////////////////////-parallax

let decoration1 = document.querySelector('#decoration-1');
let decoration2 = document.querySelector('#decoration-2');

document.onmousemove = (e) => {
  let x = e.clientX / window.innerWidth;
  let y = e.clientY / window.innerHeight;

  decoration1.style.transform = "translate(" + x * 25 + "px, " + y * 25 + "px)";
  decoration2.style.transform = "translate(-" + x * 25 + "px, " + y * 25 + "px)";
};





