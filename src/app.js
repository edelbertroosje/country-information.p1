import axios from "axios";

console.log('Hallo daar!');

//pseudo
// Axio installeren
// get request https://restcountries.com/v3.1/all
// schrijf een asynchrone functie
//maak een Get request met axios (await)
// try/catch blok om de errors af te vangen
//elementen in html maken, referentie opslaan vanuit js
//de data injecteren (map-methode)


async function fetchCountries() {
    try {
        //het request maken
        const responce = await axios.get( 'https://restcountries.com/v2/all');
        console.log(responce.data[0].languages[1].name);
    }catch(e) {
        //de errors afvangen
        console.error(e)
    }

}
fetchCountries();