/* Descrizione:
Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail generare 10 indirizzi email e stamparli in pagina all'interno di una lista


Bonus
Far comparire gli indirizzi email solamente quando sono stati tutti generati. */

//Crea una chiamata Axios con la API della mail
//Attraverso un ciclo for effettua 10 chiamate
//Il valore andrà inserito nel markup in una ul

//Bonus

//Inserisci un V-Show che rende visibile l'array di mail sono quando ci sono tutti e 10 gli elementi

const { createApp } = Vue

createApp({
    data() {
        return {
            //Variabile array per le mail causali
            mails: []
        }
    },

    methods: {

    },
    mounted() {
        //Ciclo For che effettua dieci chiamate
        for (let index = 0; index < 10; index++) {
            //Chiamata Axios con il generatore di mail
            axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(response => {
                console.log(response);
                console.log(response.data.response);
                //Pusho le mail casuali nella variabile array da me creata
                this.mails.push(response.data.response);
                
            })
            //Stampo le mail su console
            console.log(this.mails);
        }
    }
}).mount('#app')