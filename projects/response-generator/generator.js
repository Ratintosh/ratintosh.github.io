function render(txt){
    var c = document.getElementById("out");
    var ctx = c.getContext("2d");
    var img = document.getElementById("meme");
    ctx.clearRect(0, 0, c.width, c.height);
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = "black";
    ctx.drawImage(img, 0, 0, 436, 265);
    ctx.font = "18px Arial";
    ctx.textAlign = 'left';
    ctx.fillText("what happened to him?", 10, 18); 
    ctx.font = "14px Arial";
    ctx.textAlign = 'center';
    ctx.fillText("he had to come up", 360, 14); 
    ctx.fillText("with a response to \"" + txt + "\"", 360, 28); 
    
}
function submit(){
    render(document.getElementById("in").value)
}

window.onload = function() {
    render("input text here")
}