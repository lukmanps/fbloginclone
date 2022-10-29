let seconds= 00;
let tens= 00
let getSeconds= document.querySelector('.seconds')
let getTens= document.querySelector('.tens')

btnStart=document.querySelector('.btnStart')
btnStop=document.querySelector('.btnStop')
btnReset=document.querySelector('.btnReset')

btnStart.addEventListener('.click', ()=> {
    
})

function startTimer() {
    tens++
    if(tens<=9) {
        getTens.innerHTML='0'+tens
    }
    if(tens>9) {
        getTens.innerHTML=tens
    }
    if(tens>99) {
        seconds++
        getSeconds.innerHTML='0'+seconds
        tens=0
        getTens.innerHTML='0'+0;
    }
    if(seconds>9) {
        getSeconds.innerHTML=seconds
    }
}