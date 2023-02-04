function accessLegislation(actname){
    document.getElementById('archivaMain').style.display="none";
    document.getElementById('archivaMain').style.opacity="0%";
    document.getElementById('actDisplay').style.display="Block";
    document.getElementById('actDisplay').style.opacity="100%";

    if (actname=='righttoinformationact'){
        document.getElementById('actData').setAttribute("src","./asset/legislations/right-to-information-act-2005.html");
    }
    else if (actname=='indiantrustact'){
        document.getElementById('actData').setAttribute("src","./asset/legislations/indian-trust-act-1882.html");
    }
}