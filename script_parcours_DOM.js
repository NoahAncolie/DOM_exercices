// Question 1 :
// Combien y a-t-il d'éléments <p> présents dans la page HTML ? Imprime-le résultat dans la console.
console.log(`Il y a dans ce code HTML ${document.getElementsByTagName("p").length} elements "<p>"`)
// Question 2 :
// Quel est le contenu texte de l'élément portant l'id coucou ? Imprime-le dans la console.
console.log("Le contenu de l'élément avec id 'coucou' est : " + document.getElementById("coucou").textContent)
// Question 3 :
// Quelle est l'URL vers laquelle pointe le 3ème élément <a> de la page HTML ? Imprime-la dans la console.
console.log("L'URL vers laquelle pointe de 3ème élément <a> de la page HTML est : " + document.getElementsByTagName("a")[2].href)
// Question 4 :
// Combien d'éléments portent la classe compte-moi ? Imprime le résultat dans la console.
console.log(document.getElementsByClassName("compte-moi").length + " élements portent la classe compte-moi")
// Question 5 :
// Combien d'éléments <li> portent la classe compte-moi ? Imprime le résultat dans la console.
console.log(document.querySelectorAll("li.compte-moi").length + " élements <li> portent la classe compte-moi")
// Question 6 :
// Combien d'éléments <li> et situés dans une liste ordonnée portent la classe compte-moi ? Imprime le résultat dans la console.
console.log(document.querySelectorAll("ol li.compte-moi").length + " éléments <li> situés à l'intérieur d'élements <ol> portent la classe compte-moi")
// Question 7 :
// Petit jeu de piste à résoudre si possible sans regarder le fichier HTML…
// La page contient un seul élément <div>.Celui-ci contient 2 éléments "unordered list" ou <ul>.
//Dans le second <ul>, le premier élément de la liste (tag <li>) est caché 
//visuellement de l'utilisateur mais toi, tu peux en récupérer le contenu. Affiche-le dans la console.
console.log(document.querySelectorAll("div ul")[1].children[0].textContent)
