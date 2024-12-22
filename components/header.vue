<template>
    <div>
      <h1 class="title">Oscar Lee</h1>
      <div class="header">
        <nav>
            <ul>
                <li>
                    <NuxtLink active-class="active-link" :class="{'inactive-link': !isActive('/')}" to="/">Home</NuxtLink>
                </li>
                <li>
                    <NuxtLink active-class="active-link" :class="{'inactive-link': !isActive('/resume')}" to="/resume">Resume</NuxtLink>
                </li>
                <li>
                    <NuxtLink active-class="active-link" :class="{'inactive-link': !isActive('/funfacts')}" to="/funfacts">Fun Facts</NuxtLink>
                </li>
                <li>
                    <NuxtLink active-class="active-link" :class="{'inactive-link': !isActive('/links')}" to="/links">Links</NuxtLink>
                </li>
                
            </ul>
        
        
        </nav>
      </div>
      
    </div>
</template>

<script>
export default {
  methods: {
    // Method to check if the current route is the one passed as an argument
    isActive(route) {
      return this.$route.path === route;
    }
  }
}
</script>

<style scoped>
/* .horizontal-links {
  display: grid;
  grid-auto-flow: column;
} */

.title {
    padding-left: .3em;
    margin-top:1em;
}

.header nav {
  display: inline-block;
}
.header nav ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: inline-block;
}
.header nav li {
  display: inline-block;
  padding: 0 .6em;
}
.header nav a {
  display: inline-block;
  text-decoration: none;
  outline: none;
}
</style>