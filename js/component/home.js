const Home = function(resolve, reject) {
    $.get('../../../../components/home.html').then(function(res) { // 注意$.get(url)
        resolve({ // 这里是构造一个component
            template: res,
            components:{Part,Header},
            data: function() {
                return{
                    value:4,
                    instrutionlists:[
                        {name:"VUE 简单介绍",id:"NO.1"},
                        {name:"为什么使用VUE",id:"NO.2"},
                        {name:"VUE 特性",id:"NO.3"},
                        {name:"其他相关",id:"NO.4"}
                    ],
                    showflag:false
                }
            },
            methods: {
                jump(idx){
                   this.value = idx==0?2:idx==1?4:idx==2?6: idx==3?9:"";
                },
                showFn(){
                    setTimeout(() => {
                        this.showflag = true;
                    }, 2000);
                }
            },
            created() {
               
            },
            mounted: function() {
                this.showFn();
            }
        });
    })
}