const app = Vue.createApp({

  data() {
    return {
      name: 'Stamatis',
      age: 22,
      img: 'https://www.payetteforward.com/wp-content/uploads/2021/11/Why-Is-iMessage-Not-Working-On-My-iPhone-And-iPad_.jpg'
    }
  },
  methods: {
    ageplus5() {
      return this.age + 5;
    },
    favnum() {
      return Math.random();
    }
  }
})

app.mount('#assignment');