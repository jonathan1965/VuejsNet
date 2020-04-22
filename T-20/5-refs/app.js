var one =new Vue({

    el:'#vue-app-one',
    data:{
      output: ''
    },
    methods: {
        
     readRefs: function () {
          console.log(this.$refs.test.innerText);
          
        this.output = this.$refs.input.value
           
     }
      
    }   
  
    });

   