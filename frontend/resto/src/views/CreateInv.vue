<template>
  <div class="about">
    <h1>Create Inventory</h1>

    <form @submit.prevent="submitInv">
      <label>
        Date:
        <select v-model="date">
          <option>12/16/2020</option>
          <option>12/17/2020</option>
          <option>12/18/2020</option>
          <option>12/19/2020</option>
        </select>
      </label>
      <label>
        Hour:
        <select id="select-hour" v-model="selHour">
          <option v-for="hour in hours" :key="hour">{{hour}}</option>
        </select>
      </label>
      <label>
        Minutes:
        <select id="select-minutes" v-model="selMinutes">
          <option v-for="minute in minutes" :key="minute">{{minute}}</option>
        </select>
      </label>
      <label>
        Reservations:
        <input type="text" v-model="inventory.reservations"/>
      </label>
      
      <button>Submit</button>
      
    </form>
  </div>
</template>

<script>
export default {
  data(){
    return{
      hours:['00','01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23'],
      minutes:['00','15','30','45'],
      date:null,
      selHour: null,
      selMinutes: null,
      inventory:{
        date: '12/18/2020',
        time: null,
        reservations: null
      }
    }
  },
  methods:{
    submitInv(){

      this.inventory.time = this.selHour + ":" + this.selMinutes
      console.log(this.inventory)
      this.$store.dispatch('addToInventory', this.inventory)

    }
  }
}
</script>

<style lang="scss" scoped>
form{
  display: flex;
  flex-direction: row;
}
</style>