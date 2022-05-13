const app = Vue.createApp({
  data() {
    return {
      courseGoal: 'Finish the course!',
      vueLink: 'https://vuejs.org'
    };
  },
  methods: {
    outputGoal() {
      const randomNum = Math.random();

      if(randomNum > 0.5)
        this.courseGoal = 'Master Vue!'
      else
        this.courseGoal = 'Learn Vue!'
      return this.courseGoal
    }
  }

});

app.mount('#user-goal');