var imgName;
var name, knickname, title, desc;
var echangeur = new Boolean(false);
var fournaise = new Boolean(false);
var climatiseur = new Boolean(false);
var secheuse = new Boolean(false);

function loadInfo(index) {
  var innerHtml = "";

  GetInfo(index);

  innerHtml += '<div class="face">';
  innerHtml += `<img src="/res/${imgName}" alt="${name}"></img>`;
  innerHtml += "</div>";
  innerHtml += '<div class="desc">';
  innerHtml += '<p class="main">';
  innerHtml += '<span class="name">' + name + "</span>";
  innerHtml += '<span class="title"> - ' + title + "</span>";
  innerHtml += "</p>";
  innerHtml += '<p class="details">';
  innerHtml += desc;
  innerHtml += "</p>";
  innerHtml += '<p class="alias" onclick="loadSelectedService()">' + knickname + "</p>";
  innerHtml += "</div>";

  document.getElementById("team-member").innerHTML = innerHtml;
  var dots = document.getElementById("dots").children;
  for (i = 0; i < dots.length; i++) {
    dots[i].removeAttribute("selected");
  }
  dots[index].setAttribute("selected", "");
}

function GetInfo(index) {
  switch (index) {
    case 0:
      echangeur = true;
      climatiseur = false;
      fournaise = false;
      secheuse = false;
      imgName = "exchanger_icon.png";
      name = "Échangeurs d'air";
      knickname = "En savoir davantage";
      title = "Enttreprises & Domiciles";
      desc =
        "Le nettoyage des vitres est primordial afin de maintenir votre espace de vie hygiénique et propre. La saleté qui s’incruste dans vos cadrages forme à moyen terme de la moisissure. Cette moisissure en fait, est un champignon que vous respirez dans votre maison.";
      break;
    case 1:
      echangeur = false;
      climatiseur = false;
      fournaise = true;
      secheuse = false;
      imgName = "furnace_icon.png";
      name = "Fournaises";
      knickname = "En savoir davantage";
      title = "De toutes tailles";
      desc =
        "Le nettoyage des vitres est primordial afin de maintenir votre espace de vie hygiénique et propre. La saleté qui s’incruste dans vos cadrages forme à moyen terme de la moisissure. Cette moisissure en fait, est un champignon que vous respirez dans votre maison.";
      break;
    case 2:
      echangeur = false;
      climatiseur = true;
      fournaise = false;
      secheuse = false;
      imgName = "cooling_icon.png";
      name = "Climatiseurs";
      knickname = "En savoir davantage";
      title = "Muraux";
      desc =
        "Le nettoyage des vitres est primordial afin de maintenir votre espace de vie hygiénique et propre. La saleté qui s’incruste dans vos cadrages forme à moyen terme de la moisissure. Cette moisissure en fait, est un champignon que vous respirez dans votre maison.";
      break;
    case 3:
      echangeur = false;
      climatiseur = false;
      fournaise = false;
      secheuse = true;
      imgName = "dryer_icon.png";
      name = "Conduits de sécheuse";
      knickname = "En savoir davantage";
      title = "De votre domicile";
      desc =
        "Le nettoyage des vitres est primordial afin de maintenir votre espace de vie hygiénique et propre. La saleté qui s’incruste dans vos cadrages forme à moyen terme de la moisissure. Cette moisissure en fait, est un champignon que vous respirez dans votre maison.";
      break;
    default:
      break;
  }
}

function loadSelectedService() {
  if (echangeur === true) {
    window.location = "../service/echangeur-dair.html";
  }
  if (fournaise === true) {
    window.location = "../service/fournaise.html";
  }
  if (climatiseur === true) {
    window.location = "../service/climatiseur.html";
  }
  if (secheuse === true) {
    window.location = "../service/secheuse.html";
  }
}
