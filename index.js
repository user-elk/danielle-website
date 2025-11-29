document.querySelector("img").addEventListener("click", function() {
    
    var audio = new Audio("./song.mp3");
    audio.play();
});

document.querySelector(".subheading").addEventListener("click", function() {
    this.classList.add("cool");
});
