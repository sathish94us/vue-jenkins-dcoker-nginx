module.exports = {
  devServer: {
    // Paths
    proxy: {
      '^/posts' : {
        target: 'https://jsonplaceholder.typicode.com',
        changeOrigin: true
      },
      '^/zhzhang-4390': {
        target: 'https://github.com',
        changeOrigin: true
      }
    }
  }
};
