new Vue({

    el:'#vue-app',
    data:{
        name:'Jonathan',
        job:'Dev',
        website:'http://www.jonathan.com',
        websiteTag:'<a href="http://www.jonathan.com"> The john boys website</a>'
    },
    
    methods:{
        greet: function (time){
        
            return 'Good '+time + ' '+ this.name;
        }
    }
    
    });