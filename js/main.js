"use strict"
const { createApp } = Vue

createApp({
    data(){
        return{
            tasks:[
                {
                    text: 'Andare in palestra',
                    done: true
                },
                {
                    text: 'Tagliare l erba del prato',
                    done: true
                },
                {
                    text: 'Uscire il cane',
                    done: true
                },
                {
                    text: 'Abdare a fare la spesa',
                    done: true
                },
                {
                    text: 'Andare in farmacia alle 18:00',
                    done: true
                },
                {
                    text: 'Prendere gli antibiotici alle 09:00',
                    done: true
                },
                {
                    text: 'Andare a lavoro',
                    done: true
                },
                {
                    text: 'Andare dai nonni',
                    done: true
                },
                {
                    text: 'Portare la macchina dal meccanico',
                    done: true
                },
                {
                    text: 'Portare il telefono ad aggiustare',
                    done: true
                },
            ]
        }
    }
}).mount('#app')