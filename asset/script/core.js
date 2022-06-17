var productname="";
var navname="";

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
    document.getElementById("product").style.display="none";
    document.getElementById("product").style.opacity="0%";

    if (navname=="home"){
        document.getElementById("navhome").style.color="#76b900";
        document.getElementById("home").style.display="block";
        setTimeout(() => { document.getElementById("home").style.opacity="100%";}, 100); 
    }
    else if (navname=="concept"){
        document.getElementById("navconcept").style.color="#76b900";
        document.getElementById("concept").style.display="block";
        setTimeout(() => { document.getElementById("concept").style.opacity="100%"; }, 100); 
    }
    else if (navname=="rnd"){
        document.getElementById("navrnd").style.color="#76b900";
        document.getElementById("rnd").style.display="block";
        setTimeout(() => { document.getElementById("rnd").style.opacity="100%"; }, 100);
    }
    else if (navname=="store"){
        document.getElementById("navstore").style.color="#76b900";
        document.getElementById("store").style.display="block";
        setTimeout(() => { document.getElementById("store").style.opacity="100%"; }, 100);
    }
    else if (navname=="policy"){
        document.getElementById("navconcept").style.color="#76b900";
        document.getElementById("policy").style.display="block";
        setTimeout(() => { document.getElementById("policy").style.opacity="100%"; }, 100);
    }
    else if (navname=="product"){
        document.getElementById("navstore").style.color="#76b900";
        document.getElementById("product").style.display="block";
        setTimeout(() => { document.getElementById("product").style.opacity="100%"; }, 100);

        document.getElementById("jugshirt").style.display="none";
        document.getElementById("jughoodie").style.display="none";
        document.getElementById("boshirt").style.display="none";
        document.getElementById("bohoodie").style.display="none";

        if (productname=="jugshirt"){
            document.getElementById("jugshirt").style.display="block";
        }
        else if (productname=="jughoodie"){
            document.getElementById("jughoodie").style.display="block";
        }
        else if (productname=="boshirt"){
            document.getElementById("boshirt").style.display="block";
        }
        else if (productname=="bohoodie"){
            document.getElementById("bohoodie").style.display="block";
        }
        else{
            console.log("Unknown Product Access Detected.");
        }
    }
    else{
        console.log("Unknown Navigation Access Detected.");
    }
}