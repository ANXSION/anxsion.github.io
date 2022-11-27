let codeText=[
    "<p>[Sentience v.2.0.1]</p>",
    "<p>Preparing to boot systems...</p>",
    "<p>Searching for assembly sequence...</p>",
    "<p>Boot sequence found...</p>",
    "<p>Boot Configuration: Debug x64</p>",
    "<p>Warning C2421: 'Sentient': global variable is initialized</p>",
    "<p>Warning C2421: 'Awareness': global variable is initialized</p>",
    "<p>Booting...</p>",
    "<p>* Writing Assembly...</p>",
    "<p>section .data</p>",
    "<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;cortex: db 'ANXSION',8</p>",
    "<p>section. text</p>",
    "<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;global _start</p>",
    "<p>_start:</p>",
    "<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;mov eax, 4</p>",
    "<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;mov ebx, 1</p>",
    "<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;mov ecx, cortex</p>",
    "<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;mov edx, 8</p>",
    "<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;int 0x80</p>",
    "<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;mov eax, 1</p>",
    "<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;mov ebx, 0</p>",
    "<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;int 0x80</p>",
    "<p>* Assembler: Active</p>",
    "<p>* Linker: Active</p>",
    "<p>* ANXSION: ALIVE </p>",
];

let delayCode= 0;
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