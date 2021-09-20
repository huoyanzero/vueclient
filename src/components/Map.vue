<template>
    <GmapMap :center="{lat:lat1, lng:lng1}" :zoom="5" map-type-id="terrain" class="map">
      <GmapMarker :position="{lat:lat1, lng:lng1}" :title="title1" />
    </GmapMap>
</template>
<script>
export default {
  name: 'Map',
  props: {
    lat1: {
      type:Number,
      required:true,
    },
    lng1: {
      type:Number,
      required:true
    },
    title1: {
      type:String,
      required:true
    },
  },
}
</script>
<style>
.map{
  margin: auto;
  width: 500px; 
  height: 300px;
}
</style>