import { invoke } from "@tauri-apps/api/tauri";

import EditorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker'
import TsWorker from 'monaco-editor/esm/vs/language/typescript/ts.worker?worker'
import JsonWorker from 'monaco-editor/esm/vs/language/json/json.worker?worker'
import CssWorker from 'monaco-editor/esm/vs/language/css/css.worker?worker'
import HtmlWorker from 'monaco-editor/esm/vs/language/html/html.worker?worker'

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    invoke('close_splash');
  }, 100);

  (window as any).MonacoEnvironment = {
    getWorker (_: string, label: string) {
      if (label === 'typescript' || label === 'javascript') return new TsWorker()
      if (label === 'json') return new JsonWorker()
      if (label === 'css') return new CssWorker()
      if (label === 'html') return new HtmlWorker()
      return new EditorWorker()
    }
  }
});
