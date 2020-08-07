const Part = function(resolve, reject) {
    $.get('../../../../components/part.html').then(function(res) { // 注意$.get(url)
        resolve({ // 这里是构造一个component
            template: res,
            props:{
                num:1,
                title:"简单介绍"
            },
            data: function() {
                return{
                  
                }
            },
            methods: {
               
            },
            created() {
               
            },
            mounted: function() {
               
            }
        });
    })
};

