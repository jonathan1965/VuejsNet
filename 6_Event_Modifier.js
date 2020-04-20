new Vue({

    el:'#vue-app',
    data:{
      age:45,
      x:0,
      y:0
     
    },
    methods: 
    {
        add: function (inc) {
            this.age +=inc
        },
        sub: function (dec) {
            this.age -=dec
        },
        updateXY: function(e){
          this.x = e.offsetX;
          this.y = e.offsetY;
        },
     // Event modifiers    
        click: function(){
            alert("you clicked me")
        }
    }
    
    
  
    
    });