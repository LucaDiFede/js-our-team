const Informazioni = [
    {
        Nome: 'Wayne Barnett',
        Ruolo: 'Founder',
        Immagine: '',
    },

    {
        Nome: 'Angela Caroll',
        Ruolo: 'Chief Editor',
        Immagine: '',
    },

    {
        Nome: 'Walter Gordon',
        Ruolo: 'Office Manager',
        Immagine: '',
    },

    {
        Nome: 'Angela Lopez',
        Ruolo: 'Social Media Manager',
        Immagine: '',
    },

    {
        Nome: 'Scott Estrada',
        Ruolo: 'Developer',
        Immagine: '',
    },

    {
        Nome: 'Barbara Ramos',
        Ruolo: 'Graphic Designer',
        Immagini: '',
    },

];

for (let i = 0; i < Informazioni.length; i++) {
    for (let OggettoChiave in Informazioni[i]) {
    console.log(i, OggettoChiave, Informazioni[i][OggettoChiave]);
    };
}