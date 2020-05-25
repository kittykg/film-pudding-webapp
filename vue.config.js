module.exports = {
  transpileDependencies: ["vuetify"],
  chainWebpack: config => {
    config.plugin("html").tap(args => {
      args[0].title = "Film Pudding";
      return args;
    });
  },
  devServer: {
    port: 8081,
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  }
};
