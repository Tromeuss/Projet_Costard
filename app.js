

/* animation header */


const body  = document.body;
const list = document.querySelectorAll('#lists')

        let lastScroll = 0;                              /* on initialise la valeur du dernier scroll qui est de 0 */

        window.addEventListener('scroll', () => {                           
            const currentScroll = window.pageYOffset           /* la position en pixel du scroll */ 

        if (currentScroll <= 0) {                           /* si la valeur du scroll est egale a 0 alors il est au top et donc il enleve la fonction du scroll-up */              
            body.classList.remove("scroll-up")
            list[4].classList.remove("border")
            for(let lists in list){
                list[lists].classList.remove("black")
            }

        }

        if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
            body.classList.remove("scroll-up")
            body.classList.add("scroll-down")
            list[4].classList.remove("border")
            for(let lists in list){
                list[lists].classList.remove("black")
            }
        }
        
        if (currentScroll < lastScroll && body.classList.contains("scroll-down")) {
            body.classList.remove("scroll-down")
            body.classList.add("scroll-up")
            list[4].classList.add("border")
            for(let lists in list){
                list[lists].classList.add("black")
            }
            
        }

        lastScroll = currentScroll;
})

/*-------------------------------------------------*/


const ratio =.2 // a partir de quand l'animation s'execute ici c'est 20 % de l'objet

const options = {
    root : null,
    rootMargin : '0px',
    threshold: ratio
}




const handle = function (entries, observer) {
    entries.forEach(function (entry){
        if(entry.intersectionRatio > ratio) {
            console.log("visible")
            entry.target.classList.add('visible')
            observer.unobserve(entry.target) // permet de faire qu'une fois l'animation et qu'il ne se reset pas
        } else {
            console.log("invisible")
        }
    })

}



const observer = new IntersectionObserver(handle, options) 
document.querySelectorAll(".reveal").forEach(function (r) { // on observe tout les articles
    observer.observe(r)
})


observer.observe(document.querySelector(".reveal_titre"))


