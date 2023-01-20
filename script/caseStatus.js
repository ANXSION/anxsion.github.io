let caseRegister = ['2022.1.DEC.7','2023.1.JAN.5', '2023.2.JAN.7'];

let caseData = [
    ['N/A', 'Prashant Khati', 'Loan Dispute', 'Under Progress', 'N/A', 'false'],
    ['N/A', 'Bikram Mukhiya', 'Vehicle Tax', 'Completed', 'Paid', 'false'],
    ['N/A', 'Shamson Tamang', 'Company Registration', 'Pending', 'Due', 'false']
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
    document.getElementById("caseid").style.display="none";
    document.getElementById("caseref").style.display="none";
    document.getElementById("clientname").style.display="none";
    document.getElementById("class").style.display="none";
    document.getElementById("status").style.display="none";
    document.getElementById("payment").style.display="none";
    document.getElementById("invoice").style.display="none";

    let inputData = document.getElementById("caseIDinput").value;
    
    if (caseRegister.includes(inputData)){
        document.getElementById("caseid").innerHTML="Case ID: " + inputData;
        document.getElementById("caseref").innerHTML="Case Reporting: " + caseData[caseRegister.indexOf(inputData)][0];
        document.getElementById("clientname").innerHTML="Client: " + caseData[caseRegister.indexOf(inputData)][1];
        document.getElementById("class").innerHTML="Class: " + caseData[caseRegister.indexOf(inputData)][2];

        if(caseData[caseRegister.indexOf(inputData)][3] == 'Completed'){
            document.getElementById("status").innerHTML="Status:&nbsp;<span style=\"color:greenyellow;\">" + caseData[caseRegister.indexOf(inputData)][3] + "</span>";
        }
        else if(caseData[caseRegister.indexOf(inputData)][3] == 'Under Progress'){
            document.getElementById("status").innerHTML="Status:&nbsp;<span style=\"color:orange;\">" + caseData[caseRegister.indexOf(inputData)][3] + "</span>";
        }
        else if(caseData[caseRegister.indexOf(inputData)][3] == 'Pending'){
            document.getElementById("status").innerHTML="Status:&nbsp;<span style=\"color:red;\">" + caseData[caseRegister.indexOf(inputData)][3] + "</span>";
        }
        else{
            document.getElementById("status").innerHTML="Status: " + caseData[caseRegister.indexOf(inputData)][3];
        }
        

        document.getElementById("payment").innerHTML="Payment: " + caseData[caseRegister.indexOf(inputData)][4];

        if (caseData[caseRegister.indexOf(inputData)][5] =='true'){
            document.getElementById("invoice").innerHTML="Invoice:&nbsp<a href=\""+ inputData +".pdf\" download> Download</a>";
        }
        else{
            document.getElementById("invoice").innerHTML="Invoice: N/A";
        }
        

        document.getElementById("caseid").style.display="flex";
        document.getElementById("caseref").style.display="flex";
        document.getElementById("clientname").style.display="flex";
        document.getElementById("class").style.display="flex";
        document.getElementById("status").style.display="flex";
        document.getElementById("payment").style.display="flex";
        document.getElementById("invoice").style.display="flex";
    }
    else {
        document.getElementById("error").innerHTML="WARNING: Record not Found.";
        document.getElementById("error").style.display="flex";
    }

}