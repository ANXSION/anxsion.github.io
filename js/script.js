var menuStatus=0;
var categoryBookExtended=0;
var categoryAuthorExtended=0;
var categoryAboutExtended=0;

function navigationDraw(){
    if (menuStatus==0){
        document.getElementById("bar1").style.transform="rotate(45deg) translate(5.6px , 5.6px)";
        document.getElementById("bar2").style.opacity="0";
        document.getElementById("bar3").style.transform="rotate(-45deg) translate(5.6px , -5.6px)";
        document.getElementById("categories").style.left="0";
        document.getElementById("layerHider").style.display="block";
        document.getElementById("body").style.overflowY="hidden";
        setTimeout(function(){ 
            document.getElementById("layerHider").style.opacity="18%";
        }, 100);
        
        menuStatus = 1;
    }
    else {
        document.getElementById("bar1").style.transform="rotate(0) translate( 0, 0)";
        document.getElementById("bar2").style.opacity="100%";
        document.getElementById("bar3").style.transform="rotate(0) translate( 0, 0)";
        document.getElementById("categories").style.left="-50%";
        document.getElementById("layerHider").style.opacity="0";
        document.getElementById("body").style.overflowY="scroll";
        setTimeout(function(){ 
            document.getElementById("layerHider").style.display="none";
        }, 200);
        menuStatus = 0;
    }
}

function categoryExtend(categoryType){
    if (categoryType=="book"){
        if (categoryBookExtended==0){
            document.getElementById("bookCategory").style.display="flex";
            document.getElementById("bookCategoryIcon2").style.transform="rotate(0)";
            document.getElementById("bookCategoryIcon1").style.backgroundColor="darkturquoise";
            document.getElementById("bookCategoryIcon2").style.backgroundColor="darkturquoise";
            categoryBookExtended=1;
        }
        else{
            document.getElementById("bookCategory").style.display="none";
            document.getElementById("bookCategoryIcon2").style.transform="rotate(90deg)";
            document.getElementById("bookCategoryIcon1").style.backgroundColor="black";
            document.getElementById("bookCategoryIcon2").style.backgroundColor="black";
            categoryBookExtended=0;
        }
    }
    if (categoryType=="author"){
        if (categoryAuthorExtended==0){
            document.getElementById("authorCategory").style.display="flex";
            document.getElementById("authorCategoryIcon2").style.transform="rotate(0)";
            document.getElementById("authorCategoryIcon1").style.backgroundColor="darkturquoise";
            document.getElementById("authorCategoryIcon2").style.backgroundColor="darkturquoise";
            categoryAuthorExtended=1;
        }
        else{
            document.getElementById("authorCategory").style.display="none";
            document.getElementById("authorCategoryIcon2").style.transform="rotate(90deg)";
            document.getElementById("authorCategoryIcon1").style.backgroundColor="black";
            document.getElementById("authorCategoryIcon2").style.backgroundColor="black";
            categoryAuthorExtended=0;
        }
    }
    if (categoryType=="about"){
        if (categoryAboutExtended==0){
            document.getElementById("aboutCategory").style.display="flex";
            document.getElementById("aboutCategoryIcon2").style.transform="rotate(0)";
            document.getElementById("aboutCategoryIcon1").style.backgroundColor="darkturquoise";
            document.getElementById("aboutCategoryIcon2").style.backgroundColor="darkturquoise";
            categoryAboutExtended=1;
        }
        else{
            document.getElementById("aboutCategory").style.display="none";
            document.getElementById("aboutCategoryIcon2").style.transform="rotate(90deg)";
            document.getElementById("aboutCategoryIcon1").style.backgroundColor="black";
            document.getElementById("aboutCategoryIcon2").style.backgroundColor="black";
            categoryAboutExtended=0;
        }
    }
}
