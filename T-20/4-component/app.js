var one =new Vue({

    el:'#vue-app-one',
    data:{
      title:'vue app one'
    },
    methods: 
    {
           
     
    },
    computed: {
        
      greet: function () {
           return  'hello from app one   '
      }
    }   
  
    });

    var two  =new Vue({

     el:'#vue-app-two',
     data:{
          title:'vue app two'
     },
     methods: 
     {
        changeTitle: function() {
              
             one.title = "Title change"
        }      
     },
     computed: {
         
          greet: function () {
               return  'you dude this is app two speaking two year  '
          }
     }   
});   

// two.title='changed from outside'

