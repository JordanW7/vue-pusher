<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: top;
  background-color: #464646;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
}

@import url("https://fonts.googleapis.com/css?family=Lato:300,500");

a,
a:hover,
a:active,
a:visited,
a:focus {
  text-decoration: none;
}

* {
  box-sizing: border-box;
  font-display: swap;
  font-weight: 300;
  font-family: "Lato", sans-serif;
}

body {
  margin: 0;
  padding: 0;
}

@media (pointer: coarse) {
  .app {
    background-attachment: initial !important;
  }
}

@media only screen and (max-width: 1024px) and (max-resolution: 191dpi) {
  .app {
    background-image: url(images/bg-1024.jpg);
  }
}

@media only screen and (max-width: 1024px) and (min-resolution: 192dpi) {
  .app {
    background-image: url(images/bg-1920.jpg);
  }
}

@media only screen and (min-width: 1025px) and (max-width: 1600px) and (max-resolution: 191dpi) {
  .app {
    background-image: url(images/bg-1600.jpg);
  }
}

@media only screen and (min-width: 1601px) and (max-width: 1920px) and (max-resolution: 191dpi) {
  .app {
    background-image: url(images/bg-1920.jpg);
  }
}

@media only screen and (min-width: 1025px) and (min-resolution: 192dpi),
  screen and (min-width: 1921px) {
  .app {
    background-image: url(images/bg-3200.jpg);
  }
}

</style>
