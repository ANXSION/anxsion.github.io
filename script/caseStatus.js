let caseRegister = [
    '2022.1.DEC.7',
    '2023.1.JAN.5', 
    '2023.2.JAN.7',
    '2023.3.JAN.25',
    '2023.4.FEB.5',
    '2023.5.FEB.17'
];

let caseData = [
    ['N/A', 'Prashant Khati', 'Loan Dispute', 'Ongoing', 'N/A'],
    ['N/A', 'Bikram Mukhiya', 'Tax', 'Completed', 'Paid'],
    ['N/A', 'Shamson Tamang', 'Incorporation', 'Delayed', 'N/A'],
    ['N/A', 'Shamson Tamang', 'Complaint', 'Failed', 'N/A'],
    ['N/A', 'Bikram Mukhiya', 'Vehicle Fitness', 'Completed', 'Paid'],
    ['N/A', 'Unnamed LLP', 'Incorporation', 'N/A', 'N/A'],
];

function caseDisplay(casedisplaycondition){
    if (casedisplaycondition == 'close'){
        document.getElementById('caseStatus').style.opacity="0%";
        setTimeout(function() {document.getElementById('caseStatus').style.display="none";}, 300);
    }
    if (casedisplaycondition == 'open'){
        document.getElementById('caseStatus').style.display="flex";
        setTimeout(function() {document.getElementById('caseStatus').style.opacity="100%";}, 100);
    }
}

function getCaseStatus(){
    document.getElementById("error").style.display="none";
    document.getElementById("casedata").style.display="none";
    document.getElementById("caseid").style.display="none";
    document.getElementById("caseref").style.display="none";
    document.getElementById("clientname").style.display="none";
    document.getElementById("class").style.display="none";
    document.getElementById("status").style.display="none";
    document.getElementById("payment").style.display="none";

    let inputData = document.getElementById("caseIDinput").value;
    
    if (caseRegister.includes(inputData)){
        document.getElementById("casedata").style.display="grid";
        document.getElementById("caseid").innerHTML= inputData;
        document.getElementById("caseref").innerHTML= caseData[caseRegister.indexOf(inputData)][0];
        document.getElementById("clientname").innerHTML= caseData[caseRegister.indexOf(inputData)][1];
        document.getElementById("class").innerHTML= caseData[caseRegister.indexOf(inputData)][2];

        if(caseData[caseRegister.indexOf(inputData)][3] == 'Completed' || caseData[caseRegister.indexOf(inputData)][3] == 'Settled' || caseData[caseRegister.indexOf(inputData)][3] == 'Delivered'){
            document.getElementById("status").innerHTML="<span style=\"color:greenyellow;\">" + caseData[caseRegister.indexOf(inputData)][3] + "</span>";
        }
        else if(caseData[caseRegister.indexOf(inputData)][3] == 'Ongoing' || caseData[caseRegister.indexOf(inputData)][3] == 'Filed' || caseData[caseRegister.indexOf(inputData)][3] == 'Drafting'){
            document.getElementById("status").innerHTML="<span style=\"color:orange;\">" + caseData[caseRegister.indexOf(inputData)][3] + "</span>";
        }
        else if(caseData[caseRegister.indexOf(inputData)][3] == 'Pending' || caseData[caseRegister.indexOf(inputData)][3] == 'Delayed' || caseData[caseRegister.indexOf(inputData)][3] == 'Failed'){
            document.getElementById("status").innerHTML="<span style=\"color:red;\">" + caseData[caseRegister.indexOf(inputData)][3] + "</span>";
        }
        else{
            document.getElementById("status").innerHTML= caseData[caseRegister.indexOf(inputData)][3];
        }
        

        document.getElementById("payment").innerHTML= caseData[caseRegister.indexOf(inputData)][4];

        document.getElementById("caseid").style.display="flex";
        document.getElementById("caseref").style.display="flex";
        document.getElementById("clientname").style.display="flex";
        document.getElementById("class").style.display="flex";
        document.getElementById("status").style.display="flex";
        document.getElementById("payment").style.display="flex";
    }
    else {
        document.getElementById("error").innerHTML="WARNING: Record not Found.";
        document.getElementById("error").style.display="flex";
    }

}