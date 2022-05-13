const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name:'',
      confirmedName: ''
    };
  },
  methods: {
    confirmInput() {
      this.confirmedName = this.name;
    },
    add() {
      this.counter = this.counter + 5;
    },
    reduce() {
      this.counter = this.counter - 5;
    },
    setName(event,lastName) {
      this.name = event.target.value + ' ' + lastName;
    },
    submitForm(event) {
      alert('Submitted!');
    }
  }
});

app.mount('#events');
