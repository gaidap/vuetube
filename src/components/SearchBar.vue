<template>
  <div>
    <img alt="Vue logo" src="../assets/logo.png">
    <div>
      <input @input="onInput"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  methods: {
    onInput: function (event) {
      this.$emit('termChange', event.target.value);
    }
  }
}
</script>

<style scoped>
input {
  width: 75%;
}

div {
  text-align: center;
  margin: 20px;
}
</style>