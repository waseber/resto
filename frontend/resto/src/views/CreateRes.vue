<template>
  <div class="about">
    <h1>Add a Reservation</h1>

    <form>
      <label>
        Name:
        <input type="text" />
      </label>
      <label>
        Email:
        <input type="email" />
      </label>
      <label>
        Party Size:
        <select >
          <option>2</option>
        </select>
      </label>
      <label>
        Date:
        <select >
          <option>12/16/2020</option>
        </select>
      </label>
      <label>
        Time:
        <select >
          <option>12:00</option>
          <option>12:15</option>
          <option>12:30</option>
          <option>12:45</option>
        </select>
      </label>
      
      
    </form>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>

</style>