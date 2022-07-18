function randColor(){
    return Math.floor(Math.random() * 256);
}

function rgbColor(){
    return "rgb("+randColor()+","+randColor()+","+randColor()+")"
}

//Select all .important class
let importantElt = document.querySelectorAll(".important");
//Add class title to importantElt
for(elt of importantElt){
    elt.setAttribute("title", "his is an important item");
}



//Select * the images
let imgList = document.querySelectorAll("img");
for(elt of imgList){
    if(!elt.classList.contains("important")){
        elt.style.display = "none";
    }
}

//Select * paragraphes
let paragList = document.querySelectorAll("p");
for(elt of paragList){
    if(elt.classList.length==0){
        elt.style.color = rgbColor();
    }
    console.log(elt.innerHTML)
}
