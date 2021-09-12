import React, {useEffect, useRef, useState} from 'react';
import ReactDOM from "react-dom";
import * as monaco from "monaco-editor";
import Split from 'split.js';
import 'fontsource-roboto';

import 'monaco-editor/esm/vs/basic-languages/css/css.contribution'
import 'monaco-editor/esm/vs/basic-languages/xml/xml.contribution'
import 'monaco-editor/esm/vs/basic-languages/javascript/javascript.contribution'

import styles from "./index.module.scss";

export default function App() {
  const [show, setShow] = useState(false);
  const editRef: {current: monaco.editor.IStandaloneCodeEditor | null} = useRef(null)

  const onShow = () => {
    setShow(true);
    const editValue = editRef.current?.getValue();
  }

  useEffect(() => {
    const monacoContainer = document.getElementById("container") as HTMLDivElement
    editRef.current = monaco.editor.create(monacoContainer, {
      value: "function hello() {\n\talert('Hello world!');\n}",
      language: "typescript",
      theme: "vs-dark",
      automaticLayout: true,
      wrappingIndent: "indent"
    });

    const splitObs = Split(["#leftSideBar", "#container"], {
      // sizes: [37.5, 62.5],
      minSize: [100, 300],
      maxSize: [300, Infinity],
    });
  }, [])

  return (
    <main className={styles.wrapper}>
      <div id="leftSideBar" className={styles.leftSideBar}></div>
      <div id="container" className={styles.container}></div>
    </main>
  )
}

ReactDOM.render(<App />, document.getElementById("root"));
