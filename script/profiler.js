let codeText=[
    "<p>[Sentience v.2.0.1]</p>",
    "<p>Preparing to boot systems...</p>",
    "<p>Searching for boot sequence...</p>",
    "<p>Boot sequence found...</p>",
    "<p>Decrypting...</p>",
    "<p>Boot Configuration: Debug x64</p>",
    "<p>Boot started: ANXSION, Configuration: Debug x64</p>",
    "<p>Warning C2421: 'Sentient': global variable is initialized</p>",
    "<p>Warning C2421: 'Awareness': global variable is initialized</p>",
    "<p>* Validator started...</p>",
    "<p>* Intel: Signal Integrity Check...</p>",
    "<p>* Intel: Information Bus => Data Interception [1 IN => 1 OUT]</p>",
    "<p>* Intel: IN[0]: ANXSION (main-default active)</p>",
    "<p>* Intel: OUT[0]: ANXSION (main-default active)</p>",
    "<p>* Checking snapshots...</p>",
    "<p>[Succeeded]</p>",
    "<p>Initialising sensors...</p>",
    "<p>Sensors initialised</p>",
    "<p>* Protocol CORTEX_A9K",
    "<p>Boot Configuration: 1 succeeded, 0 failed, 21 up-to-date</p>",
    "<p>* Copying...</p>",
    "<p>* Interfacing...</p>",
    "<p>Booting</p>",
];

let delayCode= Math.floor(Math.random() * (50-10) + 10);
console.log(delayCode);

function printCode(x, y){
    setTimeout(()=>{document.getElementById("profiler").innerHTML+=x;},y);
}

function profilerInit(){
    document.getElementById("profiler").style.display="block";
    document.getElementById("profiler").style.opacity="100%";
    setTimeout(()=>{document.getElementById("profiler").style.opacity="0%";},900);
    setTimeout(()=>{document.getElementById("profiler").style.display="none";},1000);

    for(i = 0; i < codeText.length; i++){
        printCode(codeText[i], delayCode);
        delayCode = delayCode + Math.floor(Math.random() * (50-10) + 10);
        
    }
}