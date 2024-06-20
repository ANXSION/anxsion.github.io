function menuOpen(){
    document.getElementById('menuOpen').style.display = 'none';
    document.getElementById('menuClose').style.display = 'flex';
    document.getElementById('navMobileDisplay').style.top = '80px';
}

function menuClose(){
    document.getElementById('menuOpen').style.display = 'flex';
    document.getElementById('menuClose').style.display = 'none';
    document.getElementById('navMobileDisplay').style.top = '-100%';
}


var prevScrollpos = window.scrollY ;
window.onscroll = function() {
  var currentScrollPos = window.scrollY ;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("nav").style.top = "0";
  } else {
    document.getElementById("nav").style.top = "-100%";
  }
  prevScrollpos = currentScrollPos;
}