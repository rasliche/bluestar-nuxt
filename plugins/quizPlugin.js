import Vue from 'vue'

Vue.use((Vue, options) => {
  const files = ((ctx) => {
    const keys = ctx.keys()
    const values = keys.map(ctx)
    return keys.reduce((o, k, i) => {
      o[k] = values[i]
      return o
    }, {})
  })(require.context('../content/quizzes', true, /.ya?ml/))
  const quizzes = {}
  for (const [fileName, file] of Object.entries(files)) {
    // eslint-disable-next-line no-useless-escape
    let name = fileName.replace(/^.*[\\\/]/, '')
    name = name.split('.')[0]
    quizzes[name] = file
  }
  Vue.prototype.$quizzes = quizzes
})
