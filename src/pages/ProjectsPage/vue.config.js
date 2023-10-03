//const { defineConfig } = require('@vue/cli-service')
module.exports = {
  pages: {
    'index': {
      entry: './src/pages/HomePage/main.js',
      template: 'public/index.html',
      title: 'Home',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    'projects': {
      entry: './src/pages/ProjectsPage/main.js',
      template: 'public/index.html',
      title: 'Projects',
      chunks: ['chunk-vendors', 'chunk-common', 'projects']
    },
    'about': {
      entry: './src/pages/AboutPage/main.js',
      template: 'public/index.html',
      title: 'About',
      chunks: ['chunk-vendors', 'chunk-common', 'about']
    },
    'game': {
      entry: './src/pages/GamePage/main.js',
      template: 'public/index.html',
      title: 'About',
      chunks: ['chunk-vendors', 'chunk-common', 'game']
    }
  }
}

//defineConfig({
//  transpileDependencies: true
//})
