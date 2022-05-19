const app = Vue.createApp({
  data() {
    return {
      inp: '',
      vis: true,
      color: ''
    }
  },
  methods: {
    toggle() {
      this.vis = !this.vis;
    }
  },
  computed: {
    visibility() {
      return this.vis ? 'visible' : 'hidden';
    }
  }

});

app.mount('#assignment');