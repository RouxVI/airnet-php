const display = document.querySelector("#tree-section h4");
const imgDisplay = document.querySelector("#img-showcase img");

var cells = document.querySelectorAll("#tree-container .col[coord]");
for (i = 0; i < cells.length; i++) {
    cells[i].onmouseover = SetSelected;
}

function SetSelected(event) {
    for (i = 0; i < cells.length; i++) {
        if (cells[i] == event.toElement) {
            display.style.opacity = 1;
            display.innerHTML = GetName(i);
            imgDisplay.src = cells[i].children[0].src;
        }
    }
}

function GetName(index) {
    switch (index) {
        case 0: return "On code le site de A à Z pour assurer une fluidité maximale et on vous le fournit";
        case 1: return "Ne vous en faites pas on y a pensé, votre site sera adapté aux cellulaires ;)";
        case 2: return "Services web qui surpasse vos attentes et qui évite les regrets";
        case 3: return "Des menus intuitifs, facile d’utilisation, clair, net et précis pour une expérience optimale. On vous le promet.";
        case 4: return "Quand on a un délais on le respecte. C’est nous qui s’adapte pas vous!";
        case 5: return "Notre succès dépend du votre alors on fait tout en notre possible pour vous élever.";
        case 6: return "Clients 100% satisfait. C’est aussi simple que cela.";
        case 7: return "Services diverses de qualité supérieur au niveau de la planification de votre entreprise.";
        case 8: return "On vous tient au courant de tout ce qui se passe sur votre projet, on ne vous cache rien!";
        case 9: return "Des prix compétitifs, avantageux et juste à votre demande. Oubliez l’excès...";
        case 10: return "Chaque service est digne d’une médaille avec nous et nos clients le savent.";
        case 11: return "On vous partage tout ce qui est à savoir pour vous exprimer sur votre image, car c’est important.";
        case 12: return "On aime quand vous aimez, sans cela on continu le travail. Belle philosophie non?";
        case 13: return "Services de design innovant et propre à vos besoins.";
        case 14: return "Une équipe dynamique, compréhensive et qui possède toutes les compétences. On vous le jure!";
        case 15: return "Celui-ci est important pour vous à savoir ou peut-être pas, mais on carbure au café :D";
        case 16: return "On promet de vous remettre le produit final rapidement sans compromettre la qualité.";
        case 17: return "Certes une image vaut mille mots, mais le texte et la typographie on connaît ça!";
    }
}