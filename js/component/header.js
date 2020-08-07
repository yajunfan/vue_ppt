const Header = function(resolve, reject) {
    $.get('../../../../components/header.html').then(function(res) { // 注意$.get(url)
        resolve({ // 这里是构造一个component
            template: res,
            props:{
                title:"概况"
            },
        });
    })
}