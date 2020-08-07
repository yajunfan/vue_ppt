
const Main = function(resolve, reject) {
    $.get('../../../../components/entry.html').then(function(res) { 
        resolve({ // 这里是构造一个component
            template: res,
            data: function() {
                return{
                    nav_name:"home",//点击的模块的名字
                   
                }
            },
           
           
            methods: { // 注意此时在methods 里面 function 不可简写 ，必须写成一下形式
               
                
            },
            created() {
               
            },
            mounted: function() {
                
            }
        });
    })
}