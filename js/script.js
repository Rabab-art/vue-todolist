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
        deleteTask(index) {
            alert(index);
        },
    },
})