const app = Vue.createApp({

data() {
  return {
    tex: '',
    texx:''
  }
},

methods: {
  showAlert() {
    alert('Stay Alert!');
  },
  showTex(event,tex) {
    this.tex = event.target.value;
  },
  showTexx(event, texx) {
    this.texx = event.target.value;
  }
}

})

app.mount('#assignment');