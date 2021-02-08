new Vue({
  el: '#root',
  data: {
      option:'',
      listDisks:[],
      listGeneri:[],
      listGroups:[],
      listYears:['70s','80s','90s','2k','modern'],
  },
  mounted() {
    const self = this;
      axios.get('https://flynn.boolean.careers/exercises/api/array/music')
      .then(function(response) {
        response.data.response.forEach((item, i) => {
        self.listDisks.push(item)
        var genere = 'genre';
        var autore = 'author';
        self.generateOptions(self.listDisks,genere,self.listGeneri);
        self.generateOptions(self.listDisks,autore,self.listGroups);
        });
      });
  },
  methods:{
      generateOptions : function(parentArray,value,destinationArray){
          const self = this;
          parentArray.forEach((item, i) => {
          if (!destinationArray.includes(item[value])) {
            destinationArray.push(item[value])
          }
        });
      },
      filterListByGenre : function(element) {
        if (element.genre == this.option) {
        return true;
        console.log(this.option);
        }
      },
      filterListByAuthor : function(element) {
        if (element.author == this.option) {
        return true;
        console.log(this.option);
        }
      },
      filterListByYears : function(element) {
         let sweetYear = parseInt(element.year);
         var filterYears;
         // TODO: perchè se levo il true non funziona???
         switch (true) {
         case sweetYear > 1970 && sweetYear < 1980:
         filterYears = '70s';
         break;
         case sweetYear > 1980 && sweetYear < 1990:
          filterYears = '80s';
         break;
         case sweetYear > 1990 && sweetYear < 2000:
          filterYears = '90s';
         break;
         case sweetYear > 2000 && sweetYear < 2010:
          filterYears = '2k';
         break;
         case sweetYear > 2010 && sweetYear < 2020:
          filterYears = 'modern';
         break;
       }
        if (filterYears == this.option) {
        return true;
        console.log(this.option);
        }
      },
  },
});
Vue.config.devtools = true
