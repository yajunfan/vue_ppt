const routes = [
    // { path: '/', name:"main",component: Main },
    { path: '/', 
      name:"Main",
      component: Main,
      redirect: {
        name: 'home'
      },
      children:[
        { path: '/home',name:"home",component: Home}
      ]    
    },
    
  ];

//  实例化路由
const router = new VueRouter({
      routes 
 });