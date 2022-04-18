import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import * as monaco from "monaco-editor";
import * as React from "react";
import icon from '../../assets/icon.svg';
import './App.css';



const Hello = () => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    const newEditor = monaco.editor.create(containerRef.current, {
      fixedOverflowWidgets: true,
      fontFamily: "Meslo",
      lineHeight: 18,
      occurrencesHighlight: false,
      quickSuggestions: { strings: true },
      renderLineHighlight: "none",
      scrollbar: {
        horizontal: "visible",
        vertical: "visible",
      },
      suggest: {
        snippetsPreventQuickSuggestions: false,
      },
      wordBasedSuggestions: false,
    });
  }, [containerRef.current]);

  return (
    <div>
      <div ref={containerRef} className="Hello">
      </div>
      <h1>electron-react-boilerplate</h1>
      <div className="Hello">
        <a
          href="https://electron-react-boilerplate.js.org/"
          target="_blank"
          rel="noreferrer"
        >
          <button type="button">
            <span role="img" aria-label="books">
              📚
            </span>
            Read our docs
          </button>
        </a>
        <a
          href="https://github.com/sponsors/electron-react-boilerplate"
          target="_blank"
          rel="noreferrer"
        >
          <button type="button">
            <span role="img" aria-label="books">
              🙏
            </span>
            Donate
          </button>
        </a>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
