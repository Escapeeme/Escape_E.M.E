function afficherResultat() {
    var motSaisi = document.getElementById('champSaisie').value.toLowerCase();
    var resultatContainer = document.getElementById('resultat');


    // TEST
    if (motSaisi === 'enzo') {
        resultatContainer.textContent = 'Bodin';
    } else if (motSaisi === 'thomas') {
        resultatContainer.textContent = 'Migneret';
    }
    
        //Page 122 à 154 HISTOIRE - Renaissance

    // SALLE 6
    else if (motSaisi.toLowerCase() === 'martin luther') { //Dans la premiere boite - Fondateur de la Réforme protestante ? - Page 148
        resultatContainer.textContent = 'Alimentation réseau';
    }else if (motSaisi === '1400/1600') { //Prise64 - Dates de la Renaissances ? - Page 138
        resultatContainer.textContent = 'Etiquette';
    }else if (motSaisi === '1475') { //étiquette d'énergie élèctrique - naissance de Michel Ange ? - Page 132
        resultatContainer.textContent = 'Office planer (tableau étiquette)';
    } 

        //Dates importantes

    //SALLE 5
    else if (motSaisi === '04/07/1776') { //dans la deuxieme boite - Déclaration de l'indépendance des Etats Unis ? - Page 210
        resultatContainer.textContent = 'Feu';
    }else if (motSaisi === '24/08/1572') { //extincteur - Massacre des chefs protestant lors de la  Saint Barthelemy ? - Page 173
        resultatContainer.textContent = 'Electricité';
    } else if (motSaisi === '21/11/1783') { //tableau électrique - Date de la premiere ascension humaine en montgolfiere ? - Page 228  
        resultatContainer.textContent = 'Trousseau de clef';
    }    
 
    // EASTER EGG
    else if (motSaisi === 'tolaini') {
        resultatContainer.textContent = 'meilleur prof';
    } else if (motSaisi === 'jeu') {
        document.location.href="Astroders.py";
    }
    

    else {
        document.resultatContainer.textContent = 'Aucun texte spécifique pour le mot saisi.';
    }
}


// Récupérez le paramètre d'URL contenant la valeur saisie
var params = new URLSearchParams(window.location.search);
var motSaisi = params.get('mot');

// Utilisez cette valeur comme vous le souhaitez
console.log(motSaisie);
