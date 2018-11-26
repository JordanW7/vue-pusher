<template>
  <div class="app">
    <Headerlogo />
    <main class="app-main">
      <div class="app-container">
        <a-row>
           <a-col :xs="24" :sm="24" :md="24" :lg="16" :xl="16">
             <Video />
          </a-col>
           <a-col :xs="24" :sm="24" :md="24" :lg="8" :xl="8">
             <Comments />
           </a-col>
        </a-row>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'Main',
  data() {
    return {
      msg: 'Welcome MuzMatch',
    };
  },
};
</script>

<style>
.app-main {
  max-width: 1075px;
  margin: 0 auto;
  width: 95%;
}

.app-container {
  margin-top: 100px;
  margin-bottom: 200px;
  justify-content: center;
  align-items: center;
}
</style>
