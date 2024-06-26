/*-----------------question 1-----------------*/
let titres=document.getElementsByClassName("titre");

function cacherSection(event){
    const titre=event.target;
    const section=titre.parentNode;
    const enfant_section=section.children;
    
    if (titre.getAttribute("value")==null || titre.getAttribute("value")==0){
        for (var i=1;i<enfant_section.length;i++){
            enfant_section[i].style.display="none";
        };

        titre.setAttribute("value",1);
        animationFleche=titre.lastChild.animate([{transform:"rotate(0deg)"}],{duration: 200});
        animationFleche.onfinish=function(){
            
            titre.lastChild.style.transform="rotate(0deg)";
        };
        
        
        
    }
    else{
        titre.setAttribute("value",0);
        for (var i=1;i<enfant_section.length;i++){
            if (enfant_section[i].getAttribute("id")=="div_image_intro"){
                enfant_section[i].style.display="flex";

            }else{
                enfant_section[i].style.display="contents";
            };
            
           
        };
        animationFleche=titre.lastChild.animate([{transform:"rotate(90deg)"}],{duration: 200});
        animationFleche.onfinish=function(){
            
            titre.lastChild.style.transform="rotate(90deg)";
        };
    };
};



for (var i=0;i<titres.length;i++) {
    
    titres[i].addEventListener("click",cacherSection);
};

/*-----------------question 2-----------------*/



let boutonsEnvoyer=document.getElementById("envoyer");
let inputNom=document.getElementById("text_nom");
let inputPrenom=document.getElementById("text_prenom");

boutonsEnvoyer.addEventListener("click",function(event){
    let nom=inputNom.value;
    let prenom=inputPrenom.value;

    if (nom.length!=0 && prenom.length!=0){//pour maintenir le suspens
        event.preventDefault();
        console.log(document.getElementById("text_nom").value.length);
        
        
        alert(`Désolé ${nom} ${prenom}, je n’ai que faire de ton commentaire, je ne l’enverrai pas !`);
        //chaine de caractere delimité par des accent grave plutot que des guillemets pour inclure des variable
    };
});

/*-----------------question 3-----------------*/

let liste_lien=[
    "./data/img/gallery/1_Limoges_Hotel_de_Ville.jpg",
    "./data/img/gallery/2_Limoges_Cour_du_Temple.jpg",
    "./data/img/gallery/3_Limoges_Gare_Benedictins.jpg",
    "./data/img/gallery/4_Limoges_Halles_Centrales.jpg",
    "./data/img/gallery/5_Limoges_Pont_St_Martial.jpg",
    "./data/img/gallery/6_Limoges_Rue_de_la_Boucherie.jpg",
    "./data/img/gallery/7_Cela_pourrait_etre_quoi.png",
];

let liste_legende=[
    "Hôtel de ville de Limoges",
    "Cours du temple",
    "Gare des Bénédictins",
    "Halles Centrales de Limoges",
    "Pont Saint-Martial",
    "Rue de la boucherie",
    "Aucun rapport avec Limoges mais il en fallait bien une !"
];

let image_intro=document.getElementById("image_intro");
let compteur_image=0;
let taille_image_intro=parseInt(getComputedStyle(image_intro).width);
let image_intro_suivante=image_intro.cloneNode(true);
let figure=document.querySelector("figure");
let div_image_intro=document.getElementById("div_image_intro");



image_intro_suivante.setAttribute("id","image_intro_suivant");
image_intro_suivante.style.clipPath="inset(0 100% 0 0)";
div_image_intro.appendChild(image_intro_suivante);
div_image_intro.style.height=getComputedStyle(image_intro).height;
div_image_intro.style.width=`${taille_image_intro+100}px`;
//div_image_intro.style.minWidth=`${taille_image_intro+100}px`;


let duree_animation=300;

setInterval(function(){
    taille_image_intro=parseInt(getComputedStyle(image_intro).width);

    
    image_intro.firstElementChild.setAttribute("src",liste_lien[compteur_image]);
    image_intro.lastElementChild.innerHTML=liste_legende[compteur_image];

    image_intro.animate([{clipPath:"inset(0 0 0 0)"},{clipPath:"inset(0 0 0 100%)"}],{duration: duree_animation});
    image_intro.animate([{transform:`translateX(0px)`},{transform:`translateX(-${taille_image_intro}px)`}],{duration:duree_animation});
    image_intro.style.clipPath="inset(0 0 0 100%)";
    image_intro.style.transform=`translateX(-${taille_image_intro}px)`;
    
    compteur_image+=1;
    if (compteur_image==liste_lien.length){
        compteur_image%=liste_lien.length;
    };

    image_intro_suivante.firstElementChild.setAttribute("src",liste_lien[compteur_image]);
    image_intro_suivante.lastElementChild.innerHTML=liste_legende[compteur_image];
   

    image_intro_suivante.animate([{clipPath:"inset(0 100% 0 0)"},{clipPath:"inset(0 0 0 0)"}],{duration: duree_animation});
    image_intro_suivante.animate([{transform:`translateX(0px)`},{transform:`translateX(-${taille_image_intro}px)`}],{duration:duree_animation});

    image_intro_suivante.style.clipPath="inset(0 0 0 0)";
    image_intro_suivante.style.transform=`translateX(-${taille_image_intro}px)`;

    if(compteur_image==liste_lien.length-1){
        image_intro_suivante.style.cursor="pointer";
    }else{
        image_intro_suivante.style.cursor="default";
    }; 
},3000+duree_animation);

/*-----------------question 4-----------------*/
let body=document.querySelector("body");
let collection_enfant_body=body.children;
let liste_enfant_body=convertisHTMLCollectionEnListe(collection_enfant_body);


function convertisHTMLCollectionEnListe(collection){ 
    var liste=[];
    for (var i=0;i<collection.length;i++){
        liste[i]=collection_enfant_body[i];
    };
    return liste;
};

function melangeListe(liste_a_melanger){
    var liste=liste_a_melanger.slice();
    for (var i=liste.length-1;i>0;i--){
        
        const j = Math.floor(Math.random() * (i + 1));
        [liste[i],liste[j]]=[liste[j],liste[i]];
    }
    return liste.slice();
}

function melangeElementBody(event){

    if(event.target.getAttribute("src")==liste_lien[liste_lien.length-1]){
        var liste_enfant_body_melanger=melangeListe(liste_enfant_body);
        var nouveau_body=document.createElement("body");

        for(var i=0;i<liste_enfant_body_melanger.length;i++){
        
            nouveau_body.appendChild(liste_enfant_body_melanger[i]);
        }
        body.remove();
        document.querySelector("html").appendChild(nouveau_body);
    
    };
    
};
image_intro.addEventListener("click",melangeElementBody);
image_intro_suivante.addEventListener("click",melangeElementBody);