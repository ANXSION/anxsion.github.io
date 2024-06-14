async function terminalAnimation(){
    let tacticalInsert = document.getElementById('term');
    tacticalInsert.style.display='flex';
    let genId = new Uint32Array(1);
    self.crypto.getRandomValues(genId);

    setTimeout(()=>{tacticalInsert.insertAdjacentHTML("beforeend", "<p>function selfDiagnosis()...</p>");}, 100);
    setTimeout(()=>{tacticalInsert.insertAdjacentHTML("beforeend", "<p>&nbsp;&nbsp;&nbsp;Report.deviceID: "+genId + "</p>")}, 200);
    setTimeout(()=>{tacticalInsert.insertAdjacentHTML("beforeend", "<p>&nbsp;&nbsp;&nbsp;System.deviceMemory: "+ navigator.deviceMemory + "GB</p>");}, 300);
    setTimeout(()=>{tacticalInsert.insertAdjacentHTML("beforeend", "<p>&nbsp;&nbsp;&nbsp;System.thread.list: "+ navigator.hardwareConcurrency + " logics</p>");}, 400);

    setTimeout(()=>{tacticalInsert.insertAdjacentHTML("beforeend", "<br>");}, 450);

    setTimeout(()=>{tacticalInsert.insertAdjacentHTML("beforeend", "<p>async function netStat()...</p>");}, 500);

    setTimeout(()=>{tacticalInsert.insertAdjacentHTML("beforeend", "<p>&nbsp;&nbsp;&nbsp;Conservation Directive: "+ window.navigator.connection.saveData + "</p>");}, 600);
    setTimeout(()=>{tacticalInsert.insertAdjacentHTML("beforeend", "<p>&nbsp;&nbsp;&nbsp;Network Type: "+  window.navigator.connection.effectiveType + "</p>");}, 700);
    setTimeout(()=>{tacticalInsert.insertAdjacentHTML("beforeend", "<p>&nbsp;&nbsp;&nbsp;RTT: "+ window.navigator.connection.rtt + "ms</p>");}, 800);
    setTimeout(()=>{tacticalInsert.insertAdjacentHTML("beforeend", "<p>&nbsp;&nbsp;&nbsp;ACQUIRED ACK: "+ window.location.origin + "</p>");}, 900);
    setTimeout(()=>{tacticalInsert.insertAdjacentHTML("beforeend", "<br>");}, 950);
    setTimeout(()=>{tacticalInsert.insertAdjacentHTML("beforeend", "<p>Bootloader Secured...</p>");}, 1000);
    setTimeout(()=>{tacticalInsert.insertAdjacentHTML("beforeend", "<br>");}, 1050);
    setTimeout(()=>{tacticalInsert.insertAdjacentHTML("beforeend", "<p>Booting...</p>");}, 1100);
}