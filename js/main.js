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
                    text: 'Andare a fare la spesa',
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
    },

    methods:{
        taskDone(index){
            this.tasks[index].done = !this.tasks[index].done
        },

        taskDelete(index){
            this.tasks.splice(index, 1)
        },

        addTask(){
            let new_task = {
                text: this.txt,
                done: false
            }

            this.tasks.push(new_task);
            this.txt = ''
        }
    }
}).mount('#app')