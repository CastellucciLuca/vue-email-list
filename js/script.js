const {createApp} = Vue;

createApp({
	data() {
		return{
        emailList : [],
		}
	},
    methods: {
        generateRandomEmail(){
            for (let i = 0; i < 10; i++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((response) => {
                    const result = response.data.response;
                    console.log(result);
                    this.emailList.push(result);
                });                
            }
        },
    },   
    created(){
        this.generateRandomEmail();
    }
}).mount ('#app')