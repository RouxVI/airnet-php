var currentLeftIndex, items;
var padding;
var holder;
var dotHolder;

var timeoutHandle;

function onStart() {
  currentLeftIndex = -1;
  items = document.getElementsByClassName("mate-selector");
  holder = document.getElementById("holder-one");

  var innerDotHtml = "";
  for (i = 0; i < items.length - 2; i++) {
    // innerDotHtml += '<div onclick="selectIndex(' + i + ')">dot</div>\n';
  }
  dotHolder = document.getElementById("dots");
  dotHolder.innerHTML = innerDotHtml;

  rescaleMates();
  if (itemsToRender() < items.length) {
    animateScroll();
  } else {
    holder.setAttribute("big", "");
    dotHolder.setAttribute("hide", "");
  }
}

function rescaleMates() {
  padding = (holderWidth() % itemWidth()) / itemsToRender() / 2;

  for (i = 0; i < items.length; i++) {
    items[i].style.minWidth = itemWidth() / 1.5 + "px";
    items[i].style.padding = "0 " + "px";
  }
}

function animateScroll() {
  holder.removeAttribute("big");

  currentLeftIndex++;
  currentLeftIndex = currentLeftIndex % (items.length - itemsToRender() + 1);

  for (i = 0; i < items.length; i++) {
    items[i].removeAttribute("hidden");
    if (i <= currentLeftIndex || i >= currentLeftIndex + itemsToRender() - 1) {
    }
  }
}

function selectIndex(index) {
  if (index > items.length - itemsToRender()) index = items.length - itemsToRender();
  currentLeftIndex = index - 1;
  window.clearTimeout(timeoutHandle);
  animateScroll();
}

function registerNextCall() {
  window.clearTimeout(timeoutHandle);
  timeoutHandle = setTimeout(animateScroll, 1500);
}

function itemWidth() {
  if (items != undefined && items.length == 0) return 0;
  return items[0].clientHeight;
}

function holderWidth() {
  return holder.clientWidth;
}

function itemsToRender() {
  return Math.floor(holderWidth() / itemWidth() / 1.5);
}
