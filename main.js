const app = new Vue({

    el: "#root",

    data:{

        iterations: 10,
        address: "",
        mailList: [],
    },

    methods:{

        apiRequest: function(iterations){

            for(let i = 0; i < iterations; i++){
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')

                .then((element) => {
                    this.mailList.push(element.data.response);
                })
            } 
        }
    }
})