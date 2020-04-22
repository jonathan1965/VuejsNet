new Vue({
  el:'#vue-app',
  data:{
     available:false,
     nearby:true

  },
 //  methods:{
 //    // add: function(inc)
 //    // {
 //    //   this.age +=inc
 //    // },
 //    // sub: function(dec)
 //    // {
 //    //   this.age-=dec
 //    // },
 //    // updateXY:function(event)
 //    // {
 //    //    this.x= event.offsetX;
 //    //    this.y= event.offsetY;
 //    // },
 //    // click:function()
 //    // {
 //    //   alert('you clicked me')
 //    // }
 //    // logName:function()
 //    // {
 //    //   console.log('you entered your name')
 //    // },
 //    // logAge:function()
 //    // {
 //    //   console.console.log('you entered you age');
 //    // }
 //
 //   // addToA:function()
 //   // {
 //   //    console.log('addToA')
 //   //     return this.a + this.age
 //   //
 //   // },
 //   //
 //   //  addToB:function()
 //   // {
 //   //     console.log('addToB')
 //   //   return this.b + this.age
 //   // }
 // },
 //  computed:{
 //
 //    addToA:function()
 //    {
 //       console.log('addToA')
 //        return this.a + this.age
 //
 //    },
 //
 //     addToB:function()
 //    {
 //        console.log('addToB')
 //      return this.b + this.age
 //    }
 //
 //  }
 methods:{

 },
 computed:{
   compClass:function()
   {
    return {
      available:this.available,
      nearby:this.nearby
    }
   }
 }

});
