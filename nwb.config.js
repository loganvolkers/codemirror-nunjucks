module.exports = {
  type: 'web-module',
  babel: {
    presets: 'flow'
  },
  npm: {
    esModules: true,
    umd: {
      global: 'CodeMirrorNunjucks',
      externals: {}
    }
  }
}
