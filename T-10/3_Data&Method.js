new Vue({

    el:'#vue-app',
    data:{
        name:'Jonathan',
        job:'Dev'
    },
    
    methods:{
        greet: function (time){
        
            return 'Good '+time + ' '+ this.name;
        }
    }
    
    });