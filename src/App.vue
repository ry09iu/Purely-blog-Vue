<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}

html {
  font-size: 16px;
  scroll-behavior: smooth;
  overflow: scroll;
}

#app {
  font-family: "Hiragino Sans GB", "Microsoft YaHei", STHeiti,
    "WenQuanYi Micro Hei", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

a {
  text-decoration: none;
  cursor: pointer;

  &:link,
  &:visited {
    font-weight: normal;
    color: #f56c6c;
  }
}

::-webkit-scrollbar {
  width: 9px;
  height: 9px;
}

::-webkit-scrollbar-thumb {
  border-radius: 1px;
  background: #ededed;
}

::-webkit-scrollbar-track {
  border-radius: 1px;
}

pre {
  padding: 16px;
  margin: 16px 0;
  background: #f8f8f8 !important;
  color: #657b83;
}
</style>
