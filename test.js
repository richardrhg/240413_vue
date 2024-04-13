const { createApp } =  Vue;
createApp({
    //
    data(){
        function change(){
            console.log("asdfad");
            this.count++;
            console.log(this.count);
            name = "測試2"
        }
        return{
            count:0,
            name:"測試",
            change
        }
    },
    methods:{
        change(){
            console.log("asdfad");
            this.count++;
            console.log(this.count);
            name = "測試2"
        }
    }
}).mount("#app");