<template>
  <div id="app">
    <SearchBox :p_data = "option" v-on:search="search"/>
  </div>
</template>

<script>
import SearchBox from './components/SearchBox.vue'
import gql from 'graphql-tag'

export default {
  name: 'App',
  components: {
    SearchBox
  },
  data(){
    return{
      option:[],
      input2:''
    }
  },
  apollo:{ //retrieve data from backend
  option: {
    query:gql`query ExampleQuery($input:String){
    option(input:$input){
    Name
  }
}`,
variables(){
  return{
    input:this.input2,
  }
  },
},
},
methods:{
search:function(value){
  this.input2 = value
    }
  }
};

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
