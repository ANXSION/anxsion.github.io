var productname="";
var navname="";
var params = "";
var pageid = "";

function init(){
    params = (new URL(document.location)).searchParams;
    pageid = params.get('page');

    if (pageid=="" || pageid=="home" ){
        navclick('home');
    }
    else if (pageid=="concept"){
        navclick('concept');
    }
    else if (pageid=="rnd"){
        navclick('rnd');
    }
    else if (pageid=="store"){
        navclick('store');
    }
    else if (pageid=="policy"){
        navclick('policy');
    }
    else {
        navclick('home');
    }
    
}

function navclick(navname, productname){
    document.documentElement.scrollTop = 0;
    document.getElementById("navhome").style.color="black";
    document.getElementById("navconcept").style.color="black";
    document.getElementById("navrnd").style.color="black";
    document.getElementById("navstore").style.color="black";

    document.getElementById("home").style.display="none";
    document.getElementById("home").style.opacity="0%";
    document.getElementById("concept").style.display="none";
    document.getElementById("concept").style.opacity="0%";
    document.getElementById("policy").style.display="none";
    document.getElementById("policy").style.opacity="0%";
    document.getElementById("rnd").style.display="none";
    document.getElementById("rnd").style.opacity="0%";
    document.getElementById("store").style.display="none";
    document.getElementById("store").style.opacity="0%";

    if (navname=="home"){
        document.getElementById("navhome").style.color="#76b900";
        document.getElementById("home").style.display="block";
        setTimeout(() => { document.getElementById("home").style.opacity="100%";}, 100);
        window.history.pushState("", document.title , "?page=home")
    }
    else if (navname=="concept"){
        document.getElementById("navconcept").style.color="#76b900";
        document.getElementById("concept").style.display="block";
        setTimeout(() => { document.getElementById("concept").style.opacity="100%"; }, 100); 
        window.history.pushState("", document.title , "?page=concept")
    }
    else if (navname=="rnd"){
        document.getElementById("navrnd").style.color="#76b900";
        document.getElementById("rnd").style.display="block";
        setTimeout(() => { document.getElementById("rnd").style.opacity="100%"; }, 100);
        window.history.pushState("", document.title , "?page=rnd")
    }
    else if (navname=="store"){
        document.getElementById("navstore").style.color="#76b900";
        document.getElementById("store").style.display="block";
        setTimeout(() => { document.getElementById("store").style.opacity="100%"; }, 100);
        window.history.pushState("", document.title , "?page=store")
    }
    else if (navname=="policy"){
        document.getElementById("navconcept").style.color="#76b900";
        document.getElementById("policy").style.display="block";
        setTimeout(() => { document.getElementById("policy").style.opacity="100%"; }, 100);
        window.history.pushState("", document.title , "?page=policy")
    }
    else{
        console.log("Unknown Navigation Access Detected.");
    }
}