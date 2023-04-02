let source =`
{
    "dcb3.3d7d.c0b2.4b0e" : {
        "status" : "Ongoing",
        "payment" : "N/A",
        "note" : ""
    },
    "e914.adc3.c29f.2040" : {
        "status" : "Completed",
        "payment" : "Completed",
        "note" : ""
    },
    "b8d4.c023.9ab0.8180" : {
        "status" : "Failed",
        "payment" : "Due",
        "note" : ""
    },
    "8f81.4c9c.ac2b.83ce" : {
        "status" : "Drafting",
        "payment" : "Due",
        "note" : ""
    },
    "c31f.e24b.a375.1f93" : {
        "status" : "Registration",
        "payment" : "Due",
        "note" : ""
    }
}
`;
let text = JSON.parse(source);

function caseDisplay(casedisplaycondition){
    if (casedisplaycondition == 'close'){
        document.getElementById('caseStatus').style.opacity="0%";
        setTimeout(() => {
            document.getElementById('caseStatus').style.display="none";
        }, 50);
    }
    if (casedisplaycondition == 'open'){
        document.getElementById('caseStatus').style.display="flex";
        setTimeout(() => {
            document.getElementById('caseStatus').style.opacity="100%";
        }, 50);
    }
}

function getCaseStatus(){
    let text = JSON.parse(source);

    document.getElementById("error").style.display="none";
    document.getElementById("note").style.display="none";
    document.getElementById("status").style.display="none";
    document.getElementById("payment").style.display="none";

    let inputData = document.getElementById("caseIDinput").value;

    if (text[inputData]==undefined || inputData=="" || text==undefined) {
        document.getElementById("casedata").style.display="none";
        document.getElementById("error").innerHTML="No record found.";
        document.getElementById("error").style.display="flex";
    }
    
    else {
        document.getElementById("casedata").style.display="grid";

        if(text[inputData]["status"] == 'Completed' || text[inputData]["status"] == 'Settled' || text[inputData]["status"] == 'Delivered'){
            document.getElementById("status").innerHTML="<span style=\"color:greenyellow;\">" + text[inputData]["status"] + "</span>";
        }
        else if(text[inputData]["status"] == 'Ongoing' || text[inputData]["status"] == 'Filed' || text[inputData]["status"] == 'Drafting'){
            document.getElementById("status").innerHTML="<span style=\"color:orange;\">" + text[inputData]["status"] + "</span>";
        }
        else if(text[inputData]["status"] == 'Pending' || text[inputData]["status"] == 'Delayed' || text[inputData]["status"] == 'Failed'){
            document.getElementById("status").innerHTML="<span style=\"color:red;\">" + text[inputData]["status"] + "</span>";
        }
        else{
            document.getElementById("status").innerHTML= text[inputData]["status"];
        }
        

        document.getElementById("payment").innerHTML= text[inputData]["payment"];

        document.getElementById("status").style.display="flex";
        document.getElementById("payment").style.display="flex";

        document.getElementById("note").innerHTML= text[inputData]["note"];
        document.getElementById("note").style.display="flex";
    }
    

}