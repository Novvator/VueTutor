const app = Vue.createApp({

  data() {
    return {
      task: '',
      tasks: [],
      show: true,
      showText: 'Hide'
    }
  },
  computed: {
    buttonText() {
      return this.show ? 'Hide List' : 'Show List';
    }
  },
  methods: {
    addTask() {
      this.tasks.push(this.task);
      this.task = '';
    },
    toggle() {
      this.show = !this.show;
    }
  }
})

app.mount('#assignment');