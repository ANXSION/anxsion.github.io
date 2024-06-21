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

function rangerData(){
  let quickData = parseFloat(document.getElementById('imageSlider').value);
  let k = quickData;
  let blurData = 8;
  let grey = 100;

  if(quickData == 0.5){
    document.getElementById('rightCompare').style.filter = 'grayscale(100%) blur(8px)';
    document.getElementById('leftCompare').style.filter = 'grayscale(100%) blur(8px)';
    
  }

  else if(quickData > 0.5){
    k = (1-quickData) * 2;
    document.getElementById('rightCompare').style.filter = 'grayscale('+ grey * k +'%) blur('+ blurData * k +'px)';
    document.getElementById('leftCompare').style.filter = 'grayscale(100%) blur(8px)';
    document.getElementById('rightData').style.opacity = grey * (1-k) + "%";
    document.getElementById('leftData').style.opacity = "0%";
  }

  else if(quickData < 0.5){
    k = quickData * 2;
    document.getElementById('leftCompare').style.filter = 'grayscale(100%) blur('+ blurData * k +'px)';
    document.getElementById('rightCompare').style.filter = 'grayscale(100%) blur(8px)';
    document.getElementById('leftData').style.opacity = grey * (1-k) + "%";
    document.getElementById('rightData').style.opacity = "0%";
  }
}



