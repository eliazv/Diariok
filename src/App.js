import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import "./App.css";

function App() {
  const [content, setContent] = useState("");

  useEffect(() => {
    const savedContent = localStorage.getItem("diaryContent");
    if (savedContent) {
      setContent(savedContent);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("diaryContent", content);
  }, [content]);

  const addCurrentDate = () => {
    const currentDate = new Date().toISOString().split("T")[0];
    setContent((prevContent) => `${prevContent}\n\n${currentDate}\n`);
  };

  return (
    <div className="App">
      <h1>Il Mio Diario</h1>
      <div className="container">
        <div className="editor">
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Scrivi qui il tuo diario..."
          />
        </div>
        <div className="preview">
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
      </div>
      <button className="date-button" onClick={addCurrentDate}>
        Aggiungi Data
      </button>
    </div>
  );
}

export default App;
