<template>
  <div class="col-md-8" v-if="video">
    <div class="ratio ratio-16x9">
      <iframe :src="videoUrl" allowfullscreen/>
    </div>
    <div class="details">
      <h4>{{ video.snippet.title }}</h4>
      <p>{{ video.snippet.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "VideoDetail",
  props: ['video'],
  computed: {
    videoUrl() {
      const {videoId} = this.video.id;
      return `https://www.youtube.com/embed/${videoId}`;
    }
  }
}
</script>

<style scoped>
.details {
  margin-top: 10px;
  padding: 10px;
  border: 1px solid lightgray;
  border-radius: 4px;
}
iframe {
  box-shadow: 10px 5px 5px lightgray;
}
</style>