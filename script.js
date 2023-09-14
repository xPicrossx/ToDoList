/* On cree une variable newtask, qui renvoie juste au bouton, pas a ce qui est rentré par l'user 
Ensuite on lui ajoute par addEventListener un "ecouteur", qui veut dire qu'il reagira a quelque chose de specifique
que l'on rentre dans les premiers ' ', ici un click. Il en existe plein d'autres. 
Ensuite, on lui dit de faire une fonction:  */
let newtask = document.querySelector('#btnName');
newtask.addEventListener('click', function() {

    /*On commence par creer notre variable usrvalue, en lui disant:
Va chercher dans le document (notre html donc) la variable ID task,
et le .value qui suit lui dit de recuperer ce que rentre l'utilisateur dans cette #task
donc usrvalue = commande querySelector qui va chercher dans: doctument html -> #task -> donnée saisie de l'user*/

    let usrvalue  = document.querySelector('#task').value;

    // SI usrvalue existe, alors console.log le uservalue (ca le display dnas la console (F12))
if(usrvalue){
    console.log(usrvalue);

    //Ici on cree la variable list, qui cree dans le doc html un paragraphe
let list = document.createElement('p');

/*paragraphe dans lequel on inscrit du text (usrvalue, donc rentré par l'utilisateur) 
avec la commande innertext, ca va donc le display sur notre page html */
list.innerText = usrvalue;

//la on cree la variable liste qui renvoie a la div #liste de notre html
// c'est donc l'endroit ou on lui dit d'afficher la valeur "list", rapport aux deux lignes de code au dessus.
let liste = document.querySelector('#liste');
liste.appendChild(list);

//Ici on crée nos boutons, ici boutton Modify
let buttonModify = document.createElement("button")
buttonModify.innerText = "Modifier"
list.appendChild(buttonModify)

/*Ici on cree comme pour les autres bouttons un ecouteur au click,
et on cree une nouvelle variable qui renvoie a un prompt ou l'user rentre une nouvelle donnée
Je check avec le console log le firstchild de mon paragraphe "list", le first child renvoyant a la toute 
premiere saisie de l'utilisateur. Ensuite on prend le firstchild et on lui met la commande replacewith, 
avec la nouvelle variable (qui renvoie au prompt) qu'on a créé */

buttonModify.addEventListener('click', function() {
    let listedited =  prompt('Modifier la tâche:');
    console.log(list.firstChild)
list.firstChild.replaceWith(listedited)})

//La ou fait du style sur les boutons / texte
buttonModify.style.color = 'blue'
buttonModify.style.margin = "10px 10px 0px 0px"

//creation boutton delete
let buttonDelete = document.createElement("button")
buttonDelete.innerText = "Supprimer"
list.appendChild(buttonDelete)

//la commande ci dessous sert a supprimer notre ligne de la todolist, grace a l'addeventlistener et au list.remove
buttonDelete.addEventListener('click', function() {
    console.log(list);
    list.remove('p')})

buttonDelete.style.color = 'red'
buttonDelete.style.margin = "10px 10px 0px 0px"

//Creation boutton Valid
let buttonValid = document.createElement("button")
buttonValid.innerText = "Valider"
list.appendChild(buttonValid)

buttonValid.style.color = 'green'
buttonValid.style.margin = "10px 0px 0px 0px"

//la commande/fonction ci dessous sert a surligner/colorier notre ligne back and forth
buttonValid.addEventListener('click', function() {

if (list.style.textDecoration != "line-through"){
    list.style.textDecoration = "line-through" 
    list.style.color = "red"
    
    } else {
        list.style.textDecoration = "none"
        list.style.color = "white"}})

// Sinon on display le prompt (avec alert)
}else{
    alert('vous devez remplir le champ');}});


