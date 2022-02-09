var Video = document.getElementById("videos"); 

function playVideos() { 
    Video.play(); 
} 

/* Scroll lado Direito */

document.addEventListener('DOMContentLoaded',function(){
    var button = document.getElementById('Lado');
    
    button.onclick = function(){
        
        document.getElementById('sessaoS').scrollLeft +=1000
   
    };

}, false)
/* Scroll lado Esquerdo */
document.addEventListener('DOMContentLoaded',function(){
    var button = document.getElementById('LadoE');
    button.onclick = function(){
        document.getElementById('sessaoS').scrollLeft -=1000
        
    };

}, false)

/* Habilitar os dados ocultos*/

var dados = document.getElementById("dO"); 

function Aparecer() { 
    
    dados.style.display = "block";

} 
function Ocultar() { 
    
    dados.style.display = "none";

} 

var menu = document.getElementById("cabecalho")
window.addEventListener("scroll" , function(e){
    var scroll = this.scrollY;
    console.log(scroll)
    if(scroll > 0){
       menu.style.background = 'transparent'
    }
});