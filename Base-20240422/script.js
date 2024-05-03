/*-----------------question 1-----------------*/
let titres=document.getElementsByClassName("titre");

function cacherSection(event){
    const titre=event.target
    const section=titre.parentNode
    const enfant_section=section.children
    
    if (titre.getAttribute("value")==null || titre.getAttribute("value")==0){
        for (var i=1;i<enfant_section.length;i++){
            enfant_section[i].style.display="none"
        }
        titre.setAttribute("value",1)
        animationFleche=titre.lastChild.animate([{transform:"rotate(0deg)"}],{duration: 200})
        animationFleche.onfinish=function(){
            
            titre.lastChild.style.transform="rotate(0deg)"
        }
        
        
        
    }
    else{
        titre.setAttribute("value",0)
        for (i=1;i<enfant_section.length;i++){
            
            enfant_section[i].style.display="contents"
        }
        animationFleche=titre.lastChild.animate([{transform:"rotate(90deg)"}],{duration: 200})
        animationFleche.onfinish=function(){
            
            titre.lastChild.style.transform="rotate(90deg)"
        }
    }
}



for (let i=0;i<titres.length;i++) {
    
    titres[i].addEventListener("click",cacherSection)
}

/*-----------------question 2-----------------*/

let boutonsEnvoyer=document.getElementById("envoyer")
let inputNom=document.getElementById("text_nom")
let inputPrenom=document.getElementById("text_prenom")



boutonsEnvoyer.addEventListener("click",function(event){
    let nom=inputNom.value
    let prenom=inputPrenom.value

    if (nom.length!=0 && prenom.length!=0){//pour maintenir le suspens
        event.preventDefault()
        console.log(document.getElementById("text_nom").value.length)
        
        
        alert(`Désolé ${nom} ${prenom}, je n’ai que faire de ton commentaire, je ne l’enverrai pas !`)
        //chaine de caractere delimité par des accent grave plutot que des guillemets pour inclure des variable
    }
})


