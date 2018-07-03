<template>
  <div id="app">
    <NavBar></NavBar>
    <Home></Home>
    <FootBar></FootBar>
  </div>
</template>

<script>
import NavBar from './components/NavBar/NavBar'
import FootBar from './components/NavBar/FootBar'
import Home from './components/Home/Home'
export default {
  name: 'App',
  components: {
    NavBar,FootBar,Home
  }
}
</script>

<style>

</style>
