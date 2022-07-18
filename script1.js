function randColor(){
    return Math.floor(Math.random() * 256);
}

function rgbColor(){
    return "rgb("+randColor()+","+randColor()+","+randColor()+")"
}
document.title = "coucou";
console.log("rgb("+randColor()+","+randColor()+","+randColor()+")")
document.body.style.backgroundColor = rgbColor();

let bodyChildren = document.body.children;

for(elt of bodyChildren){
    console.log(elt);
}





