const d = document;

const date1 = new Date('Jan 01, 2024 00:00:00');
let date2,
days,
hours,
minutes,
seconds;

export function tikTok(countDown){
    let timer = setInterval(() => {
        date2 = new Date().getTime();

        days = Math.floor((date1.getTime() - date2)/ (1000 * 60 * 60 *24));

        hours = Math.floor((date1.getTime() - date2) % (1000 * 60 * 60 *24) / (1000 * 60 * 60));

        minutes = Math.floor((((date1.getTime() - date2) % (1000 * 60 * 60 * 24) % (1000 * 60 * 60)) % (1000 * 60 * 60)) / (1000 * 60));

        seconds = Math.floor(((((date1.getTime() - date2) % (1000 * 60 * 60 * 24) % (1000 * 60 * 60)) % (1000 * 60 * 60)) % (1000 * 60)) / (1000));
        
        d.querySelector(countDown).textContent = `Faltan ${days} días, ${hours} horas, ${minutes} minutos y ${seconds} segundos para año nuevo!`;
        
        if ((date1.getTime() - date2) <= 0) {
            clearInterval(timer);
            d.querySelector(countDown).textContent = `Feliz AÑO!`;
        }
    }, 1000);
};