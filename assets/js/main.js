/* Descrizione:
Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail generare 10 indirizzi email e stamparli in pagina all'interno di una lista


Bonus
Far comparire gli indirizzi email solamente quando sono stati tutti generati. */

//Crea una chiamata Axios con la API della mail
//Attraverso un ciclo for effettua 10 chiamate
//Il valore andrà inserito nel markup in una ul

const { createApp } = Vue

createApp({
    data() {
        return {
            
        }
    },

    methods: {

    },
    mounted() {
        for (let index = 0; index < 10; index++) {
            axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(response => {
                console.log(response);
            })
            
        }
    }
}).mount('#app')