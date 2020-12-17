<template>
  <div class="home">
    <div v-if="getInventory">
      {{getInventory}}
      <div class="row-titles">
        <div>Date</div>
        <div>Time</div>
        <div>Availability</div>
      </div>
      <div v-for="item in list" :key="item" class="row">
        
        <div>{{item.date}}</div>
        <div>{{item.time}}</div>
        <div>{{item.reservations}}</div>
      </div>
    </div>
    <div v-else>No Inventory</div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters } from 'vuex'
import Inventory from '@/components/Inventory.vue'

export default {
  name: 'Home',
  components: {
    Inventory
  },
  data(){
    return{
      list: this.listVals()
    }
  },
  computed:{
    listVals(){
      return this.$store.dispatch('getInventory')
    },
    ...mapGetters([
      'getInventory'
    ]),
    //getInventory(){
    //  return this.$store.state.inventory
    //}
  }
}
</script>

<style lang="scss" scoped>
.row,
.row-titles{
  display: flex;


}
</style>