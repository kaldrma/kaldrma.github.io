console.log("connected")

//nav nestaje na vrhu

let wrapper = document.getElementsByClassName("wrapper")
let glava = document.getElementById("glava")
let navigacija = document.getElementById("navigacija") 

function prozirnaGlava (){
    if (wrapper[0].scrollTop < 1000){
        glava.style.opacity = 0
    }
    else{
         glava.style.opacity = 1
        }
}
wrapper[0].addEventListener("scroll", ()=>{
    prozirnaGlava()
})
prozirnaGlava()


// nav skrollanje
function skrollaj(ime){
    let el = document.getElementById(ime);
    el.scrollIntoView({behavior: "smooth"});
}


// fade in animacije
let elementi = document.querySelectorAll(".fader")

const observer = new IntersectionObserver( entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting)
        if (entry.isIntersecting) {observer.unobserve(entry.target)}
    })
},{
    threshold : 0.2,
    rootMargin: "-30px"
})

elementi.forEach(element => {
    observer.observe(element)
})

//fetch zavrzlame

let prijavljenih = 0;
let clanova = document.getElementById("clanova");

function readJson () {
    // http://localhost:8080
    fetch('https://kaldrma.github.io/base.json')
    .then(response => {
        if (!response.ok) {
            throw new Error("HTTP error " + response.status);
        }
        return response.json();
    })
    .then(json => {
        this.users = json;
        console.log(this.users);
        prijavljenih = this.users[-1].id;
        clanova.innerText = "Ima nas " + prijavljenih + "!!!"
    })
    .catch(function () {
        this.dataError = true;
    })
 }

readJson()