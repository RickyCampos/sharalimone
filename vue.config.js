const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
        @import "@/assets/styles/reset.scss";
        @import "@/assets/styles/style.scss";
        @import "@/assets/styles/vars.scss";
        @import "@/assets/styles/mixins.scss";
        `
      }
    }
  }
})