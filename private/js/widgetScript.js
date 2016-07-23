document.addEventListener("DOMContentLoaded", function(event) {
  var sheet=document.createElement('style');
  sheet.innerHTML=window.animationStyles.css
  document.head.appendChild(sheet);

  document.getElementById("widget").innerHTML= window.widgetDom.dom
});
