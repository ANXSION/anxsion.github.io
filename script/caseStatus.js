let text =0;
fetch('https://anxsion.github.io/script/record.json').then((res) => res.json()).then((data) => text = data);

function caseDisplay(casedisplaycondition){
    if (casedisplaycondition == 'close'){
        document.getElementById('caseStatus').style.top="-100%";
    }
    if (casedisplaycondition == 'open'){
        document.getElementById('caseStatus').style.top="0";
    }
}

function getCaseStatus(){
    fetch('https://anxsion.github.io/script/record.json').then((res) => res.json()).then((data) => text = data);

    console.log(text);

    document.getElementById("error").style.display="none";
    document.getElementById("note").style.display="none";
    document.getElementById("casedata").style.display="none";
    document.getElementById("caseref").style.display="none";
    document.getElementById("clientname").style.display="none";
    document.getElementById("class").style.display="none";
    document.getElementById("status").style.display="none";
    document.getElementById("payment").style.display="none";

    let inputData = document.getElementById("caseIDinput").value;

    if (text[inputData]==undefined || inputData=="") {
        document.getElementById("error").innerHTML="No record found.";
        document.getElementById("error").style.display="flex";
    }
    
    else {
        document.getElementById("casedata").style.display="grid";
        document.getElementById("caseref").innerHTML= text[inputData]["citation"];
        document.getElementById("clientname").innerHTML= text[inputData]["client"];
        document.getElementById("class").innerHTML= text[inputData]["class"];

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

        document.getElementById("caseref").style.display="flex";
        document.getElementById("clientname").style.display="flex";
        document.getElementById("class").style.display="flex";
        document.getElementById("status").style.display="flex";
        document.getElementById("payment").style.display="flex";

        document.getElementById("note").innerHTML= text[inputData]["note"];
        document.getElementById("note").style.display="flex";
    }
    

}