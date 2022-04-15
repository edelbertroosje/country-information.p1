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


const countryList = document.getElementById('Bouvet-Island');

async function fetchCountries() {
    try {
        //het request maken
        const response = await axios.get('https://restcountries.com/v2/all');
         console.log(response.data);
         const flag = response.map((flag ) => {

         });



    } catch (e) {
        //de errors afvangen
        console.error(e)
    }

}

fetchCountries();