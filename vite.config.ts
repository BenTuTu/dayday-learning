const prefix = `monaco-editor/esm/vs`;

export default {
  base: './',
  server: {
    port: 4000
  },
  build: {
    assertsDir: './',
    rollupOptions: {
      input: ['./index.html', './splash.html'],
      // external: ['monaco-editor'],
      output: {
        manualChunks: {
          jsonWorker: [`${prefix}/language/json/json.worker`],
          cssWorker: [`${prefix}/language/css/css.worker`],
          htmlWorker: [`${prefix}/language/html/html.worker`],
          tsWorker: [`${prefix}/language/typescript/ts.worker`],
          editorWorker: [`${prefix}/editor/editor.worker`],
        },
      },
    }
  }
}
