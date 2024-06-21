let menuStatus = 0;
function menuOpen(){
    document.getElementById('menuOpen').style.display = 'none';
    document.getElementById('menuClose').style.display = 'flex';
    document.getElementById('navMobileDisplay').style.top = '80px';
    menuStatus = 1;
}

function menuClose(){
    document.getElementById('menuOpen').style.display = 'flex';
    document.getElementById('menuClose').style.display = 'none';
    document.getElementById('navMobileDisplay').style.top = '-100%';
    menuStatus = 0;
}

var prevScrollpos = window.scrollY ;
window.onscroll = function() {
  var currentScrollPos = window.scrollY ;
  if (menuStatus != 1 && currentScrollPos>40){
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("nav").style.top = "0";
      } else {
        document.getElementById("nav").style.top = "-100%";
      }
  }
  prevScrollpos = currentScrollPos;
}

function countryData(country){
    document.getElementById('countryDataContainer').style.left = '0%';
    document.getElementById('countryDataOverlay').style.display = 'flex';
    document.getElementById('countryDataContainer').style.borderTopColor = document.getElementById(country).getAttribute('data-fill');
    document.getElementById('countryName').innerText = document.getElementById(country).getAttribute('title');
    document.getElementById('countryCategory').innerText = document.getElementById(country).getAttribute('data-header');
}

function countryClose(){
    document.getElementById('countryDataContainer').style.left = '-100%';
    document.getElementById('countryDataOverlay').style.display = 'none';
}