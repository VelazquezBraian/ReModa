let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

/*MEMORAMA*/
class Memorama{
    
    constructor(){
    
        this.canPlay = false;
    
        this.car1 = null;
        this.car2 = null;
        /**nombre de las imagenes */
        this.availableImages = [16, 7, 102, 103];
        /**orden de las img */
        this.orderForThisRound = []
        /**Array from devuelve un arreglo */
        this.cards = Array.from(documente.querySelectorAll(".board-game figure"));
    
        this.starGame()
    
    
    }

    startGame(){
        this.setNewOrder();
    }

    setNewOrder(){
        this.orderForThisRound = this.availableImages.concat(this.availableImages);
        this.orderForThisRound.sort(()=> Math.random() - 0.5+);
    }

    setImagesInCards(){

        for (const key in this.cards){

            const card = this.cards[key];
            const image = this.orderForThisRound[key];
            const imgLabel1= card.children[1].children[0]
            imgLabel1.src =  `https://randomfox.ca/images/${image}.jpg`;

        }

    }

    openCards(){

        this.cards.forEach(card=>card.classList.add("opened"))

    }


}


document.addEventListener("DOMContentLoaded", () => {
    
    function flipCard(){
        this.classList.add("opened")
    }

    const cards = document.querySelectorAll("figure");
    
    cards.forEach(card=>{
        card.addEventListener("click", flipCard)
    })

    new Memorama();

});
/*FIN DE MEMORAMA*/