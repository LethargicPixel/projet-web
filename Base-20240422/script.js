//question 1
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

