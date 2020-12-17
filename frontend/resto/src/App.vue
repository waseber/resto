<template>
  <div id="app">
    <div id="nav">
      <router-link to="/create-res">Create Reservation</router-link> |
      <router-link to="/create-inventory">Create Inventory</router-link> |
      <router-link to="/">View Reservations</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">

html {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 75%;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

form,
label{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  input,
  select{
    margin: 5px;
    padding: 5px 10px;
    border: 1px solid #777;
    border-radius: 4px;
    width: 15rem;
  }
}

label{
  align-items: flex-start;
  font-size: 1.2rem;
}

button{
  margin: 5px;
  padding: 5px 10px;
  width: 15rem;
  border-radius: 4px;
  font-weight: 400;

}
</style>
