const app = new Vue({

    el: "#root",

    data:{

        iterations: 10,
        address: "",
        mylList: [],
        start: false,
    },

    methods:{

        startGeneration: function(){
            this.start = true;
        }
    },

    mounted() {
        //this.apiRequest(this.iterations);
        
        for(let i = 0; i < this.iterations; i++){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')

            .then((element) => {
                this.mylList.push(element.data.response);
            })
        }
    },


})