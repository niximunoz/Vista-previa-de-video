console.log("page loaded...");

function reproducir(elemento){
    elemento.muted = true;
    elemento.play();
}

function detenerse(elemento){
    elemento.pause();
}