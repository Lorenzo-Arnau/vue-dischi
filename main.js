new Vue({
  el: '#root',
  data: {
      option:'',
      listDisks:[],
      listGeneri:[],
      listGroups:[],
      listYears:[],
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
        self.generateYears();
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
      generateYears : function(){
          const self = this;
          self.listDisks.forEach((item, i) => {
          if (!self.listYears.includes(item.year)) {
            let sweetYear = parseInt(item.year);
             switch (true) {
             case sweetYear > 1970 && sweetYear < 1980 && !self.listYears.includes('70s'):
             self.listYears.push('70s');
             break;
             case sweetYear > 1980 && sweetYear < 1990 && !self.listYears.includes('80s'):
             self.listYears.push('80s')
             break;
             case sweetYear > 1990 && sweetYear < 2000 && !self.listYears.includes('90s'):
             self.listYears.push('90s')
             break;
             case sweetYear > 2000 && sweetYear < 2010 && !self.listYears.includes('2k'):
             self.listYears.push('2k')
             break;
             case sweetYear > 2010 && sweetYear < 2020 && !self.listYears.includes('modern'):
             self.listYears.push('modern')
             break;
           }
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
