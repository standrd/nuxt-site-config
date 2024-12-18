import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  declaration: true,
  rollup: {
    inlineDependencies: false,
    emitCJS: true,
  },
  entries: [
    { input: 'src/index', name: 'index' },
    { input: 'src/urls', name: 'urls' },
  ],
})
