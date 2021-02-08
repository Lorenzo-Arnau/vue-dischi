new Vue({
  el: '#root',
  data: {
      option:'',
      listDisks:[],
      listGeneri:[],
  },
  mounted() {
    const self = this;
      axios.get('https://flynn.boolean.careers/exercises/api/array/music')
      .then(function(response) {
        response.data.response.forEach((item, i) => {
        self.listDisks.push(item)
        self.generateOptions();
        });
      });
  },
  methods:{
      generateOptions : function(){
          const self = this;
          self.listDisks.forEach((item, i) => {
          if (!self.listGeneri.includes(item.genre)) {
            self.listGeneri.push(item.genre)
            console.log(self.listGeneri);
          }
        });
      },
      filterList : function(element) {
        if (element.genre == this.option) {
        return true;
        }    
      },
  },
});
Vue.config.devtools = true
