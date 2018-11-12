var paragraphe = document.querySelectorAll('p');
paragraphe[0].setAttribute("align", "center");

/*var paragraphe = document.querySelectorAll('p');
paragraphe[10].setAttribute("align", "center");*/

var titre = document.getElementById('#title');
titre.innerHTML = "#Blog Dragon Ball Super ";

var date = document.getElementById('#date');
date.innerHTML="04 mars 2018";

var date2 = document.getElementById('#date2');
date2.innerHTML = "18 septembre 2002 ";

var auteur = document.getElementById('.auteur');
auteur.innerHTML = "Akira Toriyama";

var fin = document.getElementById('.end');
fin.innerHTML = "RASIAH STARLIN - CopyRight @ DragonBallSuper - All right Reserved";

var auteur2 = document.getElementById('.auteur2');
auteur2.innerHTML = "Akira Toriyama";


var article = document.getElementById('#article_one');

article.innerHTML= " in du Tournoi du Pouvoir approche à grands pas \n L’épisode 129 de Dragon Ball Super, diffusé le dimanche 4 mars 2018,\n nous a dévoilé la forme maîtrisée de l’Ultra Instinct de Gokû ! \n Pour ceux ou celles qui ne l’auraient pas lu, vous trouverez ici un \n article qui détaille l’Ultra Instinct (forme non maîtrisée totalement) \n qui a été dévoilé pour la première fois lors de l’épisode spécial 109 \n et 110 de Dragon Ball Super : l’Ultra Instinct de Gokû en détail \n L’épisode 129 de Dragon Ball Super était tout simplement grandiose, \n l’apparition de l’Ultra Instinct maîtrisé de Gokû restera gravé à tout jamais dans nos mémoires.";

var title1 = document.getElementById('#title');
title1.innerHTML = "L'ULTRA INSTINCT MAITRISER DE GOKU EN DETAIL";

var title2 = document.getElementById('#title2');
title2.innerHTML = "LE SUPER SAIYAN 2 DE GOHAN EN LIVE";



var article2 = document.getElementById('#article_two');
article2.innerHTML = "Son Gohan est le fils de Chichi et de Son Goku, et devient plus tard \n le frère aîné de Son Goten. Il a été baptisé ainsi en mémoire du grand-père adoptif de Goku. \nPoussé par sa mère à se consacrer à ses études dès son plus jeune âge, il fait preuve d'une  \n intelligence remarquable. \nEn contre-partie, il n'a pas le droit de pratiquer les arts martiaux aussi intensément que \nson père car sa mère l'en empêche.";


var paragraphe = document.querySelectorAll('article');
paragraphe[0].setAttribute("align", "left");

var paragraphe = document.querySelectorAll('#date');
paragraphe[0].setAttribute("align", "left");

var paragraphe = document.querySelectorAll('#auteur');
paragraphe[0].setAttribute("align", "right");

var paragraphe = document.querySelectorAll('#auteur');
paragraphe[1].setAttribute("align", "right");

var paragraphe = document.querySelectorAll('#end');
paragraphe[0].setAttribute("align", "center");

/*
var paragraphe = document.querySelectorAll('p');
paragraphe[2].setAttribute("align", "left");*/

var paragraphe = document.querySelectorAll('article');
paragraphe[1].setAttribute("align", "left");

//var monImage = document.getElementById('image');

var lesImages = document.querySelectorAll('.images_g');

//var tabImages = ["images/index.jpg","images/2.jpg","images/index.jpg","images/index3.jpg" ];

//var compteur = 0;

/*
function changement(){
    console.log('changement');
    monImage.setAttribute("src",tabImages[compteur]);
    compteur++;
    if(compteur >= tabImages.length){
        compteur = 0;
    }

}
*/

lesImages[0].style.width = '40%';
lesImages[1].style.width = '40%';
 
lesImages[0].style.height = '400';
lesImages[1].style.height = '400';
