const app = Vue.createApp({

  data() {
    return{
      result:0,
      string: 'Not there yet'
    }


  },
  methods: {
    add(num) {
      this.result += num;
    }

  },
  watch: {
    result(value) {
      const that = this;
      if(value<37) {
        this.string = 'Not there yet';
      } else if(value >37) {
        this.string = 'Too much';
      } else if( value === 37) {
        this.string = '';
      }
      setTimeout(function () {
        that.result = 0;
      },5000);

    }
  }

})

app.mount('#assignment');