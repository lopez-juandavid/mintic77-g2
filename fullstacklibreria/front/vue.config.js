module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
 
  // Conexión al servidor del back
  devServer: {
    proxy: "http://127.0.0.1:3000"
  }
}
