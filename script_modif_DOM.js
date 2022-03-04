function changeTitle() {
    document.getElementsByTagName("h1")[0].innerHTML = "Ce que j'ai appris à THP"
    document.querySelectorAll(".jumbotron .text-muted")[0].innerHTML = "THP est une formation qui, en 3 mois, à plein temps, vous apportera des connaissances actionnables pour vous permettre de voir plus loin. Chez nous, pas de professeurs, pas de locaux, mais un groupe de travail en présentiel. Après 11 semaines, les principaux langages et outils du web n'auront plus de secret pour vous !"
}

function changeCallToActions() {
    for (let index in document.getElementsByTagName("a")) {
        if (document.getElementsByTagName("a")[index].innerHTML === "Main call to action") {
            document.getElementsByTagName("a")[index].innerHTML = "OK je veux tester !"
            document.getElementsByTagName("a")[index].setAttribute("href", "http://www.thehackingproject.org")
        } else if (document.getElementsByTagName("a")[index].innerHTML === "Secondary action") {
            document.getElementsByTagName("a")[index].innerHTML = "Non merci"
            document.getElementsByTagName("a")[index].setAttribute("href", "https://www.pole-emploi.fr/accueil/")    
        }
    }
}

function changeLogoName() {
    document.querySelectorAll("div a.navbar-brand strong")[0].innerHTML = "The THP expérience"
    document.querySelectorAll("div a.navbar-brand strong")[0].setAttribute("style", "font-size : 2rem;")
}

function populateImages() {
    let imagesArray = ["https://img.icons8.com/color/480/000000/html-5.png", "https://img.icons8.com/color/480/000000/css3.png", "https://img.icons8.com/color/480/000000/javascript.png", "https://img.icons8.com/color/480/000000/ruby-programming-language.png", "https://img.icons8.com/color/480/000000/bootstrap.png", "https://img.icons8.com/color/480/000000/github.png", "https://i.imgur.com/bJE9Pka.png", "https://avatars2.githubusercontent.com/u/25484553?s=200&v=4", "https://img.icons8.com/color/480/000000/heroku.png"]
    for (let index in document.querySelectorAll(".card-img-top")) { //BOUCLE QUI PARCOURS LES ÉLÉMENTS AVEC LA CLASS 'image de carte'
        document.querySelectorAll(".card-img-top")[index].src = imagesArray[index] //MODIFICATION DE LA SOURCE AVEC LA FONCTION src. 
    }
}

function deleteLastCards() {
    //ICI UNE BOUCLE QUI PASSE SUR LA DERNIÈRE CARTE TROIS FOIS ET LA SUPPRIMME. L'AVANT DERNIÈRE PASSE DERNIÈRE.. etc LA PARTIE ENTRE ESPACE EST LA MÉTHODE POUR TARGET LE DERNIER ÉLÉMENT (longueur totale - 1) SI TU TROUVES UNE AUTRE MÉTHODE JE VEUX BIEN LA CONNAÎTRE
    for (let i = 0; i < 3; i++) {
        document.querySelectorAll(".card")[     document.querySelectorAll(".card").length - 1     ].remove()
    }
}

function changeCardsNames() {
    //ICI ÇA RÉCUPÈRE CHAQUE ÉLÉMENTS <p> D'UN ÉLÉMENT AVEC CLASSE NAME CARD => une card ET ON MODIFIE LE CONTENU
    document.querySelectorAll(".card p")[0].innerHTML = "L’HyperText Markup Language, généralement abrégé HTML, est le langage de balisage conçu pour représenter les pages web"
    document.querySelectorAll(".card p")[1].innerHTML = "Les feuilles de style en cascade, généralement appelées CSS de l'anglais Cascading Style Sheets, forment un langage informatique qui décrit la présentation des documents HTML et XML"
    document.querySelectorAll(".card p")[2].innerHTML = "JavaScript est un langage de programmation de scripts principalement employé dans les pages web interactives mais aussi pour les serveurs. C'est un langage orienté objet à prototype."
}

function changeViewButtons() {
    //BOUCLE QUI PASSE SUR CHACUN DES ELEMENTS AVEC classe BTN-OUTLINE-SECONDARY
    for(let i = 0; i < document.getElementsByClassName("btn-outline-secondary").length; i++) { 
        document.getElementsByClassName("btn-outline-secondary")[i].className = "btn btn-sm btn-success" //ICI ÇA CHANGE LA CLASSE (ça en saute un sur deux parce qu'en changant le nom, l'index de chaque passe à n-1) ==> btn-outline[0] devient btn-success et btn-outline[1] devient btn-outline[0] etc...
    }
}

function addElement () {
    let div = document.createElement("div") //CETTE FONCTION CRÉE UN ÉLÉMENT
    div.className = "row" //DONNE LA CLASSE 'row'
    document.getElementsByClassName("container")[3].appendChild(div)//RANGE L'ÉLÉMENT crée À LA FIN DU TROISIÈME CONTAINER ==> div avec class "container". Juste après le dernier row
    document.getElementsByClassName("row")[2].appendChild(      document.getElementsByClassName('row')[1].childNodes[11]        ) //RANGE LA CARTE DU DEUXIÈME ROW DANS CETTE NOUVELLE DIV. La carte dans les parenthèses
}

changeTitle()
changeCallToActions()
changeLogoName()
populateImages()
deleteLastCards()
changeCardsNames()
changeViewButtons()
addElement()