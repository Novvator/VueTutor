const app = Vue.createApp({

  data() {
    return {
      boxAselected: false,
      boxBselected: false,
      boxCselected: false,
    };
  },
  methods: {
    boxSelected(box) {
      if(box === 'A') {
        this.boxAselected = !this.boxAselected;
      }
      if(box === 'B') {
        this.boxBselected = !this.boxBselected;
      }
      if(box === 'C') {
        this.boxCselected = !this.boxCselected;
      }
      
    }
  },
  computed: {
    boxAclasses() {
      return {
        active: this.boxAselected
      }
    }
  }
});

app.mount('#styling');