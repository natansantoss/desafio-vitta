<template>
  <div id="app">
    <TodoList/>
  </div>
</template>

<script>
import TodoList from './components/TodoList.vue'
export default {
  name: 'App',
  components: {
    TodoList
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html{
    font-size: 62,5%;
    @media(max-width: 1080px){
      font-size: 80%;
    }
    @media(max-width: 610px){
      font-size: 60%;
    }
}

body{
    font-family: 'Roboto', 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    background-color: #30343e;
}
</style>
