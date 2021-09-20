<template>
  <b-row>
    <b-col cols="12">
    <Map :lat1="lat2" :lng1="lng2" :title1="title"></Map>
      <input class="auto" v-model="input" @input="onChange" @keydown.enter="confirm(input)" type="text"/>
        <ul v-show="flag" v-if="p_data" class="a1">
          <li class="result1" v-for="(result,i) in p_data" :key="i" @click="confirm(result)">
          <span v-html="highLight(result.Name)"></span>
          </li>
        </ul>
     <span v-if="error" class="err">{{error}}</span>
    </b-col>
  </b-row>
</template>

<script>
import Map from './Map.vue'
import {gmapApi} from 'vue2-google-maps'

export default {
  name: 'SearchBox',
  components: {
    Map
  },
  computed:{
    google:gmapApi,
  },
  props: {
    p_data: {
      type:Array,
      required:false,
    }
  },
  data(){
    return{
      flag:false,
      input:'',
      search:"",
      lat2:0,
      lng2:0,
      title:'',
      error:'',
    }
  },

  
  methods:{
    highLight(current) { //highlight the matching part
      let reggie = new RegExp(this.input, "gi");
      let found = current.search(reggie) !== -1;
      return !found ? current : current.replace(reggie, function($1){return '<strong>' + $1 + '</strong>'});
    },
    onChange(){
      this.error='';
      this.$emit('search',this.input)
      this.flag = true;
    },
    getLocation(){ //get location variables
      var geocoder = new this.google.maps.Geocoder();
      geocoder.geocode( { 'address': this.input}, (results, status) =>{
      if (status == 'OK') {
        this.lat2 = results[0].geometry.location.lat();
        this.lng2 = results[0].geometry.location.lng();
      } else {
        this.error = 'Sorry not able to find the location';
      }
    });
    },
    confirm(result){ 
      if(typeof(result)!='undefined'){
        this.input = this.input==result?result:result.Name
        this.flag = false;
        this.title = this.input;
        this.getLocation();
      }
      else{
        this.error = 'Sorry not able to find the location';
      }
    },
  }
}
</script>
<style>
  .auto {
    position: relative;
    width:300px;
  }
  .a1 {
    padding: 0;
    margin: auto;
    border: 1px solid #eeeeee;
    width:300px;
    height: 120px;
    overflow: auto;
  }

  .result1 {
    text-align: left;
    padding: 4px 2px;
    cursor: pointer;
  }

  .result1:hover {
    background-color: #4080BF	;
    color: white;
  }

  .err{
    display:block;
    color:red;
  }
</style>
