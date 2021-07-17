<template>
  <div id="app">
    <div class="container">
      <SearchBar @termChange="onTermChange"></SearchBar>
      <VideoList :videos="videos" @videoSelect="onVideoSelect"></VideoList>
    </div>
    <VideoDetail></VideoDetail>
  </div>
</template>

<script>
import axios from 'axios';
import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetail";

const YOUTUBE_API = 'https://www.googleapis.com/youtube/v3/search';
const API_KEY = process.env.VUE_APP_API_KEY;

export default {
  name: 'App',
  methods: {
    onTermChange: function (searchTerm) {
      axios.get(YOUTUBE_API, {
        params: {
          key: API_KEY,
          type: 'video',
          part: 'snippet',
          q: searchTerm
        }
      }).then(response => {
        this.videos = response.data.items;
      });
    },
    onVideoSelect(video) {
      console.log(video);
    }
  },
  data() {
    return {
      videos: []
    };
  },
  components: {
    VideoDetail,
    SearchBar,
    VideoList
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
