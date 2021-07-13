<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <SearchBar @termChange="onTermChange"></SearchBar>
    <VideoList></VideoList>
  </div>
</template>

<script>
import axios from 'axios';
import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";

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
      }).then(response => console.log(response));
    }
  },
  components: {
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
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
