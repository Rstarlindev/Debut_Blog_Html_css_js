var email = document.querySelector("#email");
email.onfocus = function () {
			 if (email.value == "Votre Email"){
			 	email.value = "" ; 
			 }
		}



email.onblur = function () {
	if (email.value == "" ){
		email.value= "Votre Email";
	}
}		



function prepareJs(){
    var button = document.querySelector('button');
    
}


/*

setTimeout (prepareJs, 2000) ; 
window.onload = function () {
		
prepareJs(); 
}

*/


var bouton = document.querySelector('button');
bouton.onclick = function(){
    setTimeout(function(){
        alert('Vous êtes connecté');
    },2000);
}



var disconect = document.querySelector('#disconect');
console.log(disconect);
disconect.onclick = function(){
    setTimeout(function(){
        alert('Vous etes deconnecter de la session');
    },2000);
}

