/*Barra de navegación efecto del scroll*/
window.addEventListener("scroll", function(){
 const header = document.querySelector("header");
 header.classList.toggle("sticky", window.scrollY > 0);   
});

/*Wrapper*/ 
var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
  
};

/*Cambiar colores*/
const themeBtn = document.querySelector(".theme-btn");

themeBtn.addEventListener("click",() => {
    document.body.classList.toggle("dark-theme");
    themeBtn.classList.toggle("sun");

    localStorage.setItem("saved-theme", getCurrentTheme());
    localStorage.setItem("saved-icon", getCurrentIcon());
});

const getCurrentTheme = () => document.body.classList.contains("dark-theme") ? "dark" : "light";
const getCurrentIcon = () => themeBtn.classList.contains("sun") ? "sun" : "moon";

const savedTheme = localStorage.getItem("saved-theme");
const savedIcon = localStorage.getItem("saved-icon");

if(savedTheme){
    document.body.classList[savedTheme === "dark" ? "add" : "remove"]("dark-theme");
    themeBtn.classList[savedIcon === "sun" ? "add" : "remove"]("sum");
}

/*Seccion de Hobbies modal*/
const hobbiesModals = document.querySelectorAll(".hobbies-modal");
const leermasBtns = document.querySelectorAll(".leer-mas-btn");
const modalCloseBtns = document.querySelectorAll(".modal-close-bnt");

var modal = function(modalClick){
    hobbiesModals[modalClick].classList.add("active");
}

leermasBtns.forEach((leermasBtns, i) => {
    leermasBtns.addEventListener("click", () => {
        modal(i);
    })
})

modalCloseBtns.forEach((modalCloseBtns) => {
    modalCloseBtns.addEventListener("click", () => {
        hobbiesModals.forEach((modalView) => {
            modalView.classList.remove("active");
        });
    });
});

/*Seccion de metas modal*/
const metasModals = document.querySelectorAll(".metas-model");
const imagCard = document.querySelectorAll(".img-card");
const metasCloseBtns = document.querySelectorAll(".metas-close-bnt");

var metaModal = function(modalClick){
    metasModals[modalClick].classList.add("active");
}

imagCard.forEach((imagCard, i) => {
    imagCard.addEventListener("click", () => {
        metaModal(i);
    })
})

metasCloseBtns.forEach((metasCloseBtns) => {
    metasCloseBtns.addEventListener("click", () => {
        metasModals.forEach((metaModalView) => {
            metaModalView.classList.remove("active");
        });
    });
});

/*Boton subir*/
const scrollSubirBtn = document.querySelector(".scrollIiAriiba-btn");

window.addEventListener("scroll", function(){
    scrollSubirBtn.classList.toggle("active", window.scrollY > 500);
});

scrollSubirBtn.addEventListener("click", () =>{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

/*Activar item en la barra de navegación*/

window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        let sectionHeigt = current.offsetHeight;
        let sectionTop = current.offsetTop - 50;
        let id = current.getAttribute("id");

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeigt){
            document.querySelector(".elementos a[href*=" + id + "]").classList.add("active");
        }
        else{
            document.querySelector(".elementos a[href*=" + id + "]").classList.remove("active");
        }
    }); 
});

/*Menu responsivo*/
const menuBtn = document.querySelector(".nav-menu-btn");
const closeBtn = document.querySelector(".nav-close-bnt");
const navegacionF = document.querySelector(".navegacion");
const navItems = document.querySelector(".elementos a")

menuBtn.addEventListener("click", () => {
    navegacionF.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    navegacionF.classList.remove("active");
});

navItems.forEach((navItem) => {
    navItem.addEventListener("click", () =>{
        navegacionF.classList.remove("active");
    })
});

/*Parte smooth despazamiento*/
const enlacesInternos = document.querySelectorAll('a[href^="#"]');

enlacesInternos.forEach(enlace => {
  enlace.addEventListener('click', function(e) {
    e.preventDefault();

    const destino = document.querySelector(this.getAttribute('href'));
    const posicion = destino.offsetTop;

    window.scrollTo({
      top: posicion,
      behavior: 'smooth'
    });
  });
});



