// Appeler l'heure
clock()

// Fonctionpour afficher l'heures
function clock(){

    // ates
    const date = new Date();
    const hours = ((date.getHours() + 11) % 12 + 1);
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    // dégrés
    const hour = hours * 30;
    const minute = minutes * 6;
    const second = seconds * 6;


    // Afficher
    document.querySelector('.heure').style.transform = `rotate(${hour}deg)`;
    document.querySelector('.minute').style.transform = `rotate(${minute}deg)`;
    document.querySelector('.second').style.transform = `rotate(${second}deg)`;
    
    document.querySelector('.numerique').textContent = `${hours} h ${minutes} min ${seconds} s`;
   // document.querySelector('.date_of_day').textContent = `${date.getDay()} / ${date.getMonth()} / ${date.getFullYear()}`;
}

// interval d'afficharge d'executi0n de la fnctiom clock
setInterval(clock, 1000);
console.log(clock);