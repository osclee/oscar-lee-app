<template>
  <div>
    <!-- <div class="header-controls">
      <button @click="toggleColorMode" class="theme-toggle">
        {{ colorMode.preference === 'dark' ? '☀️' : '🌙' }}
      </button>
    </div> -->
    <!-- <div>
      <h1 class="title" style="font-size: 2.5em;">Hi!</h1>
      <h1 class="title" style="font-size: 2.5em;">I'm Oscar</h1>
    </div> -->
    <!-- <div class="header">
      <nav>
        <ul>
          <li>
            <NuxtLink active-class="active-link" class="inactive-link" to="/">Home</NuxtLink>
          </li>
          <li>
            <NuxtLink active-class="active-link" class="inactive-link" to="/resume">Resume</NuxtLink>
          </li>
          <li>
            <NuxtLink active-class="active-link" class="inactive-link" to="/links">Contact and Links</NuxtLink>
          </li>

        </ul>


      </nav>
    </div> -->

  </div>
</template>

<script setup>
const colorMode = useColorMode()

const toggleColorMode = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}
</script>

<style scoped>
.header-controls {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1000;
}

.theme-toggle {
  background: var(--background2);
  border: 1px solid var(--link);
  color: var(--text);
  padding: 8px 12px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 18px;
  transition: all 0.3s ease;
}

.theme-toggle:hover {
  background: var(--text);
  color: var(--background);
}

/* .horizontal-links {
  display: grid;
  grid-auto-flow: column;
} */

.title {
  padding-left: .3em;
  margin-top: 1em;
  display: inline-block;
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