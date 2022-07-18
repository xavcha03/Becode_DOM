let learners = [
    "Guillaume",
    "Rinaldo",
    "Benoit",
    "Xavier",
    "Xavier",
    "Daniela",
    "Anthony",
    "Julien",
    "Sophie",
    "Axel",
    "Hazem",
    "Kamilla",
    "Stéphanie",
    "Julien", 
    "Doriano",
    "Eddy",
    "Selim",
    "Titouan",
    "Guillaume"
];


for(firstName of learners){
    createSection(firstName);
}




function createSection(firstName){
    let sectionElt = document.createElement("section");
    let colorR = randColor();
    let colorV = randColor();
    let colorB = randColor();


    sectionElt.style.backgroundColor = rgbColor(colorR,colorV,colorB);
    let textColor;
    textColor = (detectBrightNess(colorR, colorV, colorB)<125)?rgbColor(256,256,256):rgbColor(0,0,0);
    
    sectionElt.style.color = textColor;
    
    
    let paragraphElt = document.createElement("p");
    
    let textElt =document.createTextNode(firstName);
    
    paragraphElt.appendChild(textElt);
    
    sectionElt.appendChild(paragraphElt);
    
    let artElt = document.querySelector("article");
    
    artElt.appendChild(sectionElt);

    console.log(sectionElt.style.backgroundColor);
}



function randColor(){
    return Math.floor(Math.random() * 256);
}

function rgbColor(r, g, b){
    return "rgb("+r+","+g+","+b+")"
}

function detectBrightNess(r, g, b){
    let brightness = Math.round(((parseInt(r) * 299) +
    (parseInt(g) * 587) +
    (parseInt(b) * 114)) / 1000);
    console.log(brightness);
    return brightness;
}

function mixAll(){
    //Recupérer tous les éléments dans body
    AllElt = document.body;
    for (var i = AllElt.children.length; i >= 0; i--) {
        AllElt.appendChild(AllElt.children[Math.random() * i | 0]);
}
}

mixAll();

