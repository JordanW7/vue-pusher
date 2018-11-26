<template>
<section class="video">
      <iframe
        title="video"
        class="video-iframe"
        src="https://www.youtube.com/embed/XOacA3RYrXk"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </section>
</template>

<script>
export default {
  name: 'Video',
  data() {
    return {
      msg: 'Video',
    };
  },
};
</script>

<style>
.video {
  position: relative;
  overflow: hidden;
  padding-top: 56.25%;
}

.video-iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
}
</style>
