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
        titre.innerHTML=titre.innerHTML.slice(0,titre.innerHTML.length-1)+"⭢"
        //titre.innerHTML[titre.innerHTML.indexOf("⭣")]="⭢";
        
        
    }
    else{
        
        for (i=1;i<enfant_section.length;i++){
            
            enfant_section[i].style.display="contents"
        }
        titre.setAttribute("value",0)
        titre.innerHTML=titre.innerHTML.slice(0,titre.innerHTML.length-1)+"⭣"
    }
}



for (let i=0;i<titres.length;i++) {
    titres[i].innerHTML+=" ⭣"
    titres[i].addEventListener("click",cacherSection)
}

