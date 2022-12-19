function loading () {
    const loading = document.querySelector('.loading')
};
loading();
function move() {
    var elem = document.querySelector(".myBar");   
    var width = 0;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= 100) {
            clearInterval(id);
        } else {
            width++; 
            elem.style.width = width + '%'; 
        }
    }
}   
move()