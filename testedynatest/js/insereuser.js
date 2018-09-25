
var camponame = document.querySelector("#name");
var campoemail = document.querySelector("#email");
var mostraNome = document.querySelector("#mostraNome");





var botaoAdicionar = document.querySelector("#cadastro");
botaoAdicionar.addEventListener("click", function(){
          
    event.preventDefault();
            
    if(campoemail.value !='' && camponame!=''){

        mostraNome.innerHTML  = "Bem vindo " + camponame.value;

        campoemail.value = '';
        camponame.value  ='';
        
        mostraNome.classList.toggle("showbemvindo");        

        clearMsg();

    }

});

function clearMsg() {
    setTimeout(function(){
    
        mostraNome.classList.toggle("showbemvindo");  
        
    }, 2000);
}