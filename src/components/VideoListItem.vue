<template>
  <li class="list-group-item media">
    <img class="mr-3" :src="thumbnailUrl" :alt="thumbnailAlternative"/>
    <div class="media-body">
      {{ video.snippet.title }}
    </div>
  </li>
</template>

<script>
export default {
  name: "VideoListItem",
  props: ['video'],
  computed: {
    thumbnailUrl() {
      return this.video.snippet.thumbnails.default.url;
    },
    thumbnailAlternative() {
      return this.video.id.videoId;
    }
  }
}
</script>

<style scoped>
  li {
    display: flex;
    cursor: pointer;
  }

  li:hover {
    background-color: lightgray;
  }

  div {
    margin: 5px;
  }
</style>