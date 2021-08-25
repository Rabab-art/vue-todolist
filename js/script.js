console.log('Vue ok', Vue);
const app = new Vue({
    el: '#app',
    data: {
        tasks:
            [
                'Fare la spesa',
                'Fare la valigia',
                'Tagliando macchina',
                'Buttare spazzatuta',
            ],
    },
    methods: {
        deleteTaskIndex(index) {
            this.tasks.splice(index, 1);
        },
        deleteTask(task) {
            this.tasks = task.filter((item) => item !== task);

        },
    },
})
