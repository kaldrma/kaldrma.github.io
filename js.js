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
let arhiva ;

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
        prijavljenih = this.users.length;
        clanova.innerText = "Ima nas " + prijavljenih + "!!!"

        arhiva = json;
    })
    .catch(function () {
        this.dataError = true;
    })
 }

readJson()


function salji () {
    let data = ' , {"id": "'+ (prijavljenih+1) +'","ime": "'+ document.getElementById("ime").value+'","prezime": "'+ document.getElementById("prezime").value+'","rodjendan": "'+ document.getElementById("rodjendan").value+'","email": "'+ document.getElementById("mail").value+'"}'

    let xhr = new XMLHttpRequest();
    xhr.open("POST", "https://kaldrma.github.io/base.json");

    xhr.setRequestHeader("Accept", "application/json");
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onload = () => console.log(xhr.responseText);

    xhr.send(data);
}