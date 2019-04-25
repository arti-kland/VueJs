new Vue({
    el: '#app',
    data: {
        message: 'Votre Nom',
        message2: 'Votre Avis',
        input:'',
        checked: true,
        isShowing: false
    },
    methods: {
        change: function(){
            this.message2 = this.input
        },
        style: function() {
            if (this.checked) {
                return {color: '#0000FF'}
            } else {
                return {color: '#FF0060'}

                }
            }
        }
})