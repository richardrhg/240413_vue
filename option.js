// let countJs = 0;

// let timer = setInterval(()=>{
//     console.log(countJs)
// },1000)

let app = Vue.createApp({
    data(){
        return {
            count:1,
            name:"你好",
            arr:[],
            p:null
        }
    },
    methods:{
        // function集中地
        change(){
            console.log("aa");
        },
        add(){
            // 新增list
            this.arr.push({
                "text":this.count,
                "isEdit":false
            })
            this.count++;
        },
        del(index){
            this.p = "已刪除"+this.arr[index].text
            this.arr.splice(index,1)
        },
    }
}).mount("#app")

// createApp({
//     data(){
//         count:0
//     }
// }).mount("#app2")