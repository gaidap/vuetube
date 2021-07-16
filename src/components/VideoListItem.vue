<template>
  <li class="list-group-item">
    <img class="thumbnail" :src="video.snippet.thumbnails.default.url" :alt="video.id.videoId"/>
    {{ video.snippet.title }}
  </li>
</template>

<script>
export default {
  name: "VideoListItem",
  props: ['video']
}
</script>