let source =`
{
    "dcb3.3d7d.c0b2.4b0e" : {
        "status" : "Ongoing",
        "payment" : "N/A",
        "note" : "Ongoing consultation with the financial institution."
    },
    "e914.adc3.c29f.2040" : {
        "status" : "Completed",
        "payment" : "Completed",
        "note" : "Case completed."
    },
    "b8d4.c023.9ab0.8180" : {
        "status" : "Failed",
        "payment" : "Completed",
        "note" : "Reinitiating petition to the correct fourm."
    },
    "8f81.4c9c.ac2b.83ce" : {
        "status" : "Drafting",
        "payment" : "Due",
        "note" : "Drafting under progress."
    },
    "c31f.e24b.a375.1f93" : {
        "status" : "Delayed",
        "payment" : "Due",
        "note" : "Waiting response."
    },
    "3e27.c106.4732.a7e6" : {
        "status" : "Filed",
        "payment" : "N/A",
        "note" : "Waiting police response."
    },
    "7bc9.29d9.c225.acc8" : {
        "status" : "Pending",
        "payment" : "Due",
        "note" : "Waiting response."
    },
    "d30f.e364.6264.eaf4" : {
        "status" : "Filed",
        "payment" : "Completed",
        "note" : "Awaiting signatures."
    },
    "6f85.b27f.3ccc.248c" : {
        "status" : "Ongoing",
        "payment" : "N/A",
        "note" : "Ongoing consultation with the financial institution."
    },
    "9561.bdff.6408.6fb1" : {
        "status" : "Drafting",
        "payment" : "N/A",
        "note" : "Ongoing consultation with the financial institution."
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