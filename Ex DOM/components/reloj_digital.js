export default function reloj(iniciarReloj, detenerReloj, iniciarAlarma, detenerAlarma, reloj) {
    const d = document;
    //
    //
    //
    let nIntervId;


    function temporizador() {
        if (!nIntervId) {
            nIntervId = setInterval(newTime, 1000);
        }
    };

    function newTime() {
        d.querySelector(reloj).textContent = new Date().toLocaleTimeString([], { hour12: false });
      }

      function stopTemporizador() {
        clearInterval(nIntervId);
        // release our intervalID from the variable
        nIntervId = null;
      }

      //
      //
      //
      //
    let nAlarmID;
    let audio = 'Wake up!';
    const speak = (texto) => speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
    
    function alarm() {
        if (!nAlarmID) {
            nAlarmID = setInterval(newSound, 1000);
        }
    };

    function newSound() {
        speak(audio);
    }

    function stopAlarm() {
        clearInterval(nAlarmID);
        // release our intervalID from the variable
        nAlarmID = null;
      }

    d.addEventListener('click', e => {
    
        if(e.target.matches(iniciarReloj)) {
            temporizador();
            e.target.disabled = true;

        }
      
        if(e.target.matches(detenerReloj)) {
            stopTemporizador();
            d.querySelector(reloj).textContent = '';
            d.querySelector(iniciarReloj).disabled = false;
        }

        if(e.target.matches(iniciarAlarma)) {
            alarm();
            d.querySelector(iniciarAlarma).disabled = true;
        }

        if(e.target.matches(detenerAlarma)) {
            stopAlarm();
            d.querySelector(iniciarAlarma).disabled = false;
        }
    });
  };