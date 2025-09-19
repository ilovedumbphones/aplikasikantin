function opentab(evt, ce) {
  var i, x, tablinks;
  x = document.getElementsByClassName("tabss");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" w3-red", "");
  }
  document.getElementById(ce).style.display = "block";
  evt.currentTarget.className += " w3-red";
}
